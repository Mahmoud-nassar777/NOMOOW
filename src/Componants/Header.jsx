// src/Componants/Header.jsx
import React, { useState, useEffect } from 'react';

const Header = ({ onMenuToggle }) => {
    const [dropdownOpen, setDropdownOpen] = useState(false);

    // Toggle user dropdown
    const toggleDropdown = (e) => {
        e.stopPropagation();
        setDropdownOpen(!dropdownOpen);
    };

    // Close dropdown when clicking outside
    useEffect(() => {
        const handleClickOutside = (e) => {
            const dropdownMenu = document.getElementById('userDropdownMenu');
            const userBtn = document.getElementById('userProfileBtn');
            if (dropdownMenu && userBtn && !userBtn.contains(e.target) && !dropdownMenu.contains(e.target)) {
                setDropdownOpen(false);
            }
        };
        document.addEventListener('click', handleClickOutside);
        return () => document.removeEventListener('click', handleClickOutside);
    }, []);

    return (
        <header className="dashboard-header">
            <div className="header-content">
                {/* Sidebar toggle button */}
                <button className="menu-toggle-btn" id="menuToggleBtn" onClick={onMenuToggle}>
                    <i className="bi bi-list"></i>
                </button>

                {/* Header title */}
                <h2 className="header-title">لوحة التحكم</h2>

                {/* Actions */}
                <div className="header-actions">
                    <button className="notification-btn">
                        <i className="bi bi-bell"></i>
                    </button>

                    <div className="user-profile-dropdown">
                        <button className="user-profile-btn" id="userProfileBtn" onClick={toggleDropdown}>
                            <div className="user-info">
                                <span className="user-greeting">مرحبا محمد</span>
                                <span className="user-level">مبتدئ</span>
                            </div>
                            <div className="user-avatar">
                                <i className="bi bi-person-circle"></i>
                            </div>
                            <i className="bi bi-chevron-down dropdown-icon"></i>
                        </button>

                        <div
                            className={`dropdown-menu ${dropdownOpen ? 'show' : ''}`}
                            id="userDropdownMenu"
                        >
                            <a href="#" className="dropdown-item">
                                <i className="bi bi-person"></i>
                                <span>الملف الشخصي</span>
                            </a>
                            <a href="#" className="dropdown-item">
                                <i className="bi bi-gear"></i>
                                <span>الإعدادات</span>
                            </a>
                            <a href="#" className="dropdown-item">
                                <i className="bi bi-box-arrow-right"></i>
                                <span>تسجيل الخروج</span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;
