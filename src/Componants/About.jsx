import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const About = () => {
    return (
        <section id="about" className="about-section py-5">
            <Container>

                {/* العنوان */}
                <Row className="m-auto justify-content-end">
                    <Col lg={7}>
                        <h2 className="about-title">
                            !وسع نطاق وصولك وابدأ ببيع منتجاتك في كل زاوية من السوق
                        </h2>
                    </Col>
                </Row>

                {/* المحتوى */}
                <Row className="m-auto align-items-center">

                    {/* النص */}
                    <Col lg={5} md={12}>
                        <div className="about-content">
                            <p>
                                ابدأ بيع منتجاتك على موقعك الإلكتروني، وحقق أقصى استفادة من جميع
                                القنوات التي يتواجد فيها عميلك، توسع في الوصول إلى جمهورك أينما
                                كانوا!
                            </p>

                            <ul className="about-list">
                                <li>عبر موقعك الخاص</li>
                                <li>عبر تطبيقك الخاص</li>
                                <li>عبر طريقة تسويقك الخاصة</li>
                            </ul>
                        </div>
                    </Col>

                    {/* الصور */}
                    <Col lg={7} md={12}>
                        <div className="features-grid">

                            <div className="feature-card primary-card">
                                <img
                                    src="../src/assets/features-1.png"
                                    alt="اختيار الثيم المناسب"
                                    className="feature-img"
                                />
                                <p className="feature-caption">اختار تيم مناسب، بيع منتجاتك</p>
                            </div>

                            <div className="feature-card secondary-card">
                                <img
                                    src="../src/assets/features-2.png"
                                    alt="منصة تجارة إلكترونية احترافية"
                                    className="feature-img"
                                />
                                <p className="feature-caption">احترافية</p>
                            </div>

                        </div>
                    </Col>

                </Row>

            </Container>
        </section>
    );
};

export default About;
