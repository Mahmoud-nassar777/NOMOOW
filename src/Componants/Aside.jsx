// src/Componants/Aside.jsx
import React, { useEffect } from 'react';

const Aside = ({ sidebarActive = false, onClose }) => {
    const closeSidebar = () => {
        if (onClose) {
            onClose();
        }
    };

    // Close sidebar on window resize if screen > 992
    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth > 992 && sidebarActive) {
                closeSidebar();
            }
        };
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [sidebarActive]);

    // Smooth scroll and active link
    const handleNavClick = (sectionId, e) => {
        e.preventDefault();

        // Remove active class from all links
        document.querySelectorAll('.sidebar-nav .nav-link').forEach(l => {
            l.classList.remove('active');
        });

        // Add active class to clicked link
        e.currentTarget.classList.add('active');

        // Scroll to section
        const section = document.getElementById(sectionId);
        if (section) {
            section.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }

        // Close sidebar on mobile
        if (window.innerWidth <= 992) {
            closeSidebar();
        }
    };

    return (
        <>
            {/* Overlay */}
            <div
                id="sidebarOverlay"
                className={`sidebar-overlay ${sidebarActive ? 'active' : ''}`}
                onClick={closeSidebar}
                style={{ display: sidebarActive ? 'block' : 'none' }}
            ></div>

            <aside className={`dashboard-sidebar ${sidebarActive ? 'active' : ''}`}>
                <div className="sidebar-header">
                    <div className="sidebar-logo">
                        <i className="bi bi-bag-fill"></i>
                        <span className="logo-text">NOMOOW</span>
                    </div>
                    <button className="sidebar-close-btn" onClick={closeSidebar}>
                        <i className="bi bi-x-lg"></i>
                    </button>
                </div>

                <nav className="sidebar-nav">
                    {/* الرئيسية */}
                    <div className="nav-section">
                        <h6 className="nav-section-title">الرئيسية</h6>
                        <ul className="nav-menu">
                            <li className="nav-item">
                                <a
                                    href="#dashboard"
                                    className="nav-link active"
                                    onClick={(e) => handleNavClick('dashboard', e)}
                                >
                                    <i className="bi bi-grid"></i>
                                    <span>لوحة التحكم</span>
                                    <span className="nav-badge">2</span>
                                </a>
                            </li>
                            <li className="nav-item">
                                <a
                                    href="#reports"
                                    className="nav-link"
                                    onClick={(e) => handleNavClick('reports', e)}
                                >
                                    <i className="bi bi-graph-up"></i>
                                    <span>التقارير</span>
                                    <span className="nav-badge">2</span>
                                </a>
                            </li>
                            <li className="nav-item">
                                <a
                                    href="#orders"
                                    className="nav-link"
                                    onClick={(e) => handleNavClick('orders', e)}
                                >
                                    <i className="bi bi-file-text"></i>
                                    <span>جميع الطلبات</span>
                                    <span className="nav-badge">2</span>
                                </a>
                            </li>
                            <li className="nav-item">
                                <a
                                    href="#products"
                                    className="nav-link"
                                    onClick={(e) => handleNavClick('products', e)}
                                >
                                    <i className="bi bi-file-text"></i>
                                    <span>المنتجات</span>
                                    <span className="nav-badge">2</span>
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* العملاء */}
                    <div className="nav-section">
                        <h6 className="nav-section-title">العملاء</h6>
                        <ul className="nav-menu">
                            <li className="nav-item">
                                <a
                                    href="#customers"
                                    className="nav-link"
                                    onClick={(e) => handleNavClick('customers', e)}
                                >
                                    <i className="bi bi-people"></i>
                                    <span>جميع العملاء</span>
                                </a>
                            </li>
                            <li className="nav-item">
                                <a
                                    href="#coupons"
                                    className="nav-link"
                                    onClick={(e) => handleNavClick('coupons', e)}
                                >
                                    <i className="bi bi-tag"></i>
                                    <span>كوبونات</span>
                                </a>
                            </li>
                            <li className="nav-item">
                                <a
                                    href="#support-services"
                                    className="nav-link"
                                    onClick={(e) => handleNavClick('support-services', e)}
                                >
                                    <i className="bi bi-gem"></i>
                                    <span>الخدمات المساندة</span>
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* المبيعات */}
                    <div className="nav-section">
                        <h6 className="nav-section-title">المبيعات</h6>
                        <ul className="nav-menu">
                            <li className="nav-item">
                                <a
                                    href="#applications"
                                    className="nav-link"
                                    onClick={(e) => handleNavClick('applications', e)}
                                >
                                    <i className="bi bi-grid"></i>
                                    <span>التطبيقات</span>
                                </a>
                            </li>
                            <li className="nav-item">
                                <a
                                    href="#blog"
                                    className="nav-link"
                                    onClick={(e) => handleNavClick('blog', e)}
                                >
                                    <i className="bi bi-file-earmark-text"></i>
                                    <span>المدونة</span>
                                </a>
                            </li>
                            <li className="nav-item">
                                <a
                                    href="#payments"
                                    className="nav-link"
                                    onClick={(e) => handleNavClick('payments', e)}
                                >
                                    <i className="bi bi-credit-card"></i>
                                    <span>المدفوعات</span>
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* الإعدادات */}
                    <div className="nav-section">
                        <h6 className="nav-section-title">الإعدادات</h6>
                        <ul className="nav-menu">
                            <li className="nav-item">
                                <a
                                    href="#admin-settings"
                                    className="nav-link"
                                    onClick={(e) => handleNavClick('admin-settings', e)}
                                >
                                    <i className="bi bi-sliders"></i>
                                    <span>إعدادات المشرف</span>
                                </a>
                            </li>
                            <li className="nav-item">
                                <a
                                    href="#store-settings"
                                    className="nav-link"
                                    onClick={(e) => handleNavClick('store-settings', e)}
                                >
                                    <i className="bi bi-cart"></i>
                                    <span>إعدادات المتجر</span>
                                </a>
                            </li>
                        </ul>
                    </div>
                </nav>

                {/* Sidebar Help */}
                <div className="sidebar-help">
                    <div className="help-card">
                        <p className="help-text">هل تحتاج الي مساعدة</p>
                        <div className="help-illustration">
                            <svg viewBox="0 0 200 100" xmlns="http://www.w3.org/2000/svg">
                                <path d="M10,80 Q30,20 50,50 T90,30 T130,40 T170,20" stroke="#ff8a5c" strokeWidth="3" fill="none" strokeLinecap="round" />
                                <circle cx="170" cy="20" r="5" fill="#ff8a5c" />
                                <path d="M165,15 L175,15 M170,10 L170,20" stroke="#ff8a5c" strokeWidth="2" />
                            </svg>
                        </div>
                        <a href="#" className="help-btn">أطلب الدعم</a>
                    </div>
                </div>
            </aside>
        </>
    );
};

export default Aside;
