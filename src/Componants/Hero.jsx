import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const Hero = () => {
    return (
        <section id="home" className="hero">
            <Container>
                <Row className="align-items-center">

                    {/* العمود الأيسر الخاص بالصورة */}
                    <Col lg={6} md={12} className="d-flex justify-content-center">
                        <div className="hero-img">
                            <img src="../src/assets/hero-img.png" alt="hero" />

                            {/* بوكس جانبي */}
                            <div className="side-box">
                                <h5>تصاميم متنوعة</h5>
                                <p>99% من نسب النجاح</p>
                                <a href="#">عرض</a>
                            </div>

                            {/* الأيقونات اليسار */}
                            <div className="small-icons">
                                <i className="bi bi-heart"></i>
                                <i className="bi bi-person"></i>
                            </div>

                            {/* البوكس السفلي */}
                            <div className="bottom-box">
                                <p>إنشاء متاجر إلكترونية احترافية</p>
                                <i className="bi bi-arrow-right-short"></i>
                            </div>

                        </div>
                    </Col>

                    {/* محتوى النص */}
                    <Col lg={6} md={12}>
                        <div className="hero-content">
                            <h1 className="hero-title">
                                منصة خمسة أيام هي بوابتك لعالم التجزئة الحديثة
                            </h1>

                            <h2 className="subtitel">
                                نمو معك <br />
                                <span>لبناء مشروعك</span>

                                <div className="avatar-groub">
                                    <div className="avatar-wrapper">
                                        <div className="avatars">
                                            <img src="../src/assets/persone1.jpg" alt="avatar" />
                                            <img src="../src/assets/persone2.jpg" alt="avatar" />
                                            <img src="../src/assets/persone3.jpg" alt="avatar" />
                                            <img src="../src/assets/persone4.jpg" alt="avatar" />
                                        </div>
                                        <div className="arrow-icon">
                                            <i className="bi bi-arrow-up-right"></i>
                                        </div>
                                    </div>
                                </div>
                            </h2>

                            {/* الزرار */}
                            <a href="#" className="start-btn">ابدأ الآن</a>
                        </div>
                    </Col>
                </Row>


            </Container>
                {/* الجزء السفلي */}
                <Row className="mt-3 flex-row-reverse align-items-start">

                    <Col xs={5} className="stats-container">
                        <span className="stat-arrow ml-4">→</span>

                        <div className="stat-item">
                            <p className="stat-number mb-0">230</p>
                            <p className="stat-text-plus mb-0">ألف+</p>
                            <p className="stat-subtext mb-0">مستخدم</p>
                        </div>

                        <div className="stat-item">
                            <p className="stat-number mb-0">12</p>
                            <p className="stat-text-plus mb-0">سنة</p>
                            <p className="stat-subtext mb-0">خبرة</p>
                        </div>

                        <div className="stat-item d-flex align-items-center">
                            <div>
                                <p className="stat-number mb-0">10</p>
                                <p className="stat-text-plus mb-0">ثيمات+</p>
                                <p className="stat-subtext mb-0">متاجر</p>
                            </div>
                        </div>
                    </Col>

                    <Col xs={7} className="video-container p-0">
                        <div className="video-placeholder">
                            <img
                                src="../src/assets/hero-video-thumb.png"
                                alt="صورة للمتجر الإلكتروني والتجارة"
                                className="video-img"
                            />
                            <div className="play-button-circle">
                                <span className="play-icon">▶</span>
                            </div>
                        </div>
                    </Col>

                </Row>
        </section>
    );
};

export default Hero;
