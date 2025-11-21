// src/Componants/Nav.jsx
import React from 'react';
import { Navbar, Container, Nav as RBNav, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const Nav = () => {
    const navigate = useNavigate();

    const scrollTo = (id) => (e) => {
        e.preventDefault();
        const el = document.getElementById(id);
        if (el) {
            el.scrollIntoView({ behavior: 'smooth', block: 'start' });
            // close mobile menu if open (bootstrap collapse uses "show" class)
            const bsCollapse = document.querySelector('.navbar-collapse.show');
            if (bsCollapse) bsCollapse.classList.remove('show');
        } else {
            // fallback: change hash (optional)
            window.location.hash = id;
        }
    };

    const goToDashboard = (e) => {
        e.preventDefault();
        navigate('/dashboard');
    };

    return (
        <Navbar expand="lg" className="custom-bg" variant="dark">
            <Container>
                <div className="navbar-container">
                    <div className="d-flex justify-between ">
                        <a className="navbar-brand ml-auto" href="#">
                            <img src="/src/assets/logo-white.png" alt="شعار Nomow" className="logo-img" />
                        </a>

                        <div className="d-flex align-items-center mobile-login">
                            <a className="mobile-login-btn" href="/dashboard" onClick={goToDashboard}>
                                <i className="bi bi-arrow-right-circle"></i>
                            </a>

                            {/* <Navbar.Toggle aria-controls="navbarNav" className="navbar-toggler">
                                <span className="navbar-toggler-icon"></span>
                            </Navbar.Toggle> */}
                            <Navbar.Toggle aria-controls="navbarNav">
                                <span className="navbar-toggler-icon"></span>
                            </Navbar.Toggle>
                        </div>
                    </div>

                    <Navbar.Collapse id="navbarNav" className="collapse navbar-collapse">
                        <RBNav className="navbar-nav align-items-center ">
                            <li className="nav-item">
                                <a className="nav-link text-white" href="#home" onClick={scrollTo('home')}>الرئيسية</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link text-white" href="#about" onClick={scrollTo('about')}>من نحن</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link text-white" href="#features" onClick={scrollTo('features')}>المميزات</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link text-white" href="#pricing" onClick={scrollTo('pricing')}>الباقات</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link text-white" href="#faq" onClick={scrollTo('faq')}>الأسئلة الشائعة</a>
                            </li>
                        </RBNav>

                        <div className="desktop-login">
                            <a className="btn custom-btn-login" href="/dashboard" onClick={goToDashboard}>
                                <i className="bi bi-arrow-right-circle"></i> تسجيل الدخول
                            </a>
                        </div>
                    </Navbar.Collapse>
                </div>
            </Container>
        </Navbar>
    );
};

export default Nav;
