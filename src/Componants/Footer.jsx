// src/Componants/Footer.jsx
import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const Footer = () => {
    return (
        <footer className="site-footer">
            <Container>
                <Row className="m-auto footer-top">
                    <Col lg={4} md={12} className="mb-4 mb-lg-0">
                        <div className="footer-brand">
                            <img src="/src/assets/logo-white.png" alt="شعار نمو" className="footer-logo" />
                            <p>منصة خمسة أيام هي بوابتك لعالم التجزئة الحديث</p>
                            <div className="footer-social d-flex justify-content-start justify-content-lg-start">
                                <a href="#"><i className="bi bi-facebook"></i></a>
                                <a href="#"><i className="bi bi-instagram"></i></a>
                                <a href="#"><i className="bi bi-twitter"></i></a>
                                <a href="#"><i className="bi bi-youtube"></i></a>
                            </div>
                            <div className="footer-partner">
                                <img src="../src/assets/saudi_business 1.png" alt="المركز السعودي للأعمال" />
                            </div>
                        </div>
                    </Col>

                    <Col lg={2} md={4} xs={6} className="mb-4">
                        <h5>الشروط الخاصة</h5>
                        <ul className="footer-links">
                            <li><a href="#">سياسة الاستخدام</a></li>
                            <li><a href="#">سياسة الخصوصية</a></li>
                            <li><a href="#">التوثيق</a></li>
                        </ul>
                    </Col>

                    <Col lg={2} md={4} xs={6} className="mb-4">
                        <h5>الشركاء</h5>
                        <ul className="footer-links">
                            <li><a href="#">انضم كشريك</a></li>
                            <li><a href="#">التسويق بالعمولة</a></li>
                            <li><a href="#">اعتمادات تجارية</a></li>
                        </ul>
                    </Col>

                    <Col lg={2} md={4} xs={6} className="mb-4">
                        <h5>الدعم</h5>
                        <ul className="footer-links">
                            <li><a href="#">اتصل بنا</a></li>
                            <li><a href="#">دليل الاستخدام</a></li>
                            <li><a href="#">المدونة</a></li>
                        </ul>
                    </Col>

                    <Col lg={2} md={4} xs={6} className="mb-4">
                        <h5>روابط عامة</h5>
                        <ul className="footer-links">
                            <li><a href="#">ابحث عن وظيفة</a></li>
                            <li><a href="#">ابحث عن تدريب</a></li>
                            <li><a href="#">احصاءات</a></li>
                        </ul>
                    </Col>
                </Row>
            </Container>

            <div className="footer-bottom text-center">
                <p>© Copyright 2025. NOMOOW. All rights reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;
