import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import faqData from "../Data/Faq.json";

// استيراد الصورة
import qaImg from "../assets/qa.png";

const Faq = () => {
    const [selected, setSelected] = useState(1);

    return (
        <section id="faq" className="faq-section py-5">
            <Container>
                <Row className="m-auto align-items-center">

                    {/* FAQ TEXT */}
                    <Col lg={7} md={12} className="order-2 order-lg-1">
                        <div className="faq-wrapper">
                            <h2 className="faq-title">الأسئلة المتكررة</h2>

                            <div className="faq-accordion">

                                {faqData.map((item) => (
                                    <div className="faq-item" key={item.id}>
                                        <input
                                            type="radio"
                                            name="faq"
                                            id={`faq-item-${item.id}`}
                                            checked={selected === item.id}
                                            onChange={() => setSelected(item.id)}
                                        />

                                        <label
                                            className="faq-question"
                                            htmlFor={`faq-item-${item.id}`}
                                        >
                                            {item.question}
                                            <i className="bi bi-chevron-down"></i>
                                        </label>

                                        <div className="faq-answer">
                                            <p>{item.answer}</p>
                                        </div>
                                    </div>
                                ))}

                            </div>
                        </div>
                    </Col>

                    {/* RIGHT SIDE SUPPORT CARD */}
                    <Col lg={5} md={12} className="order-1 order-lg-2 mb-4 mb-lg-0">
                        <div className="faq-support-card">

                            <div className="support-illustration">
                                <img src={qaImg} alt="فريق الدعم" />
                            </div>

                            <div className="support-content">
                                <h3>نحن هنا لتمكين من مساعدتنا!</h3>
                                <p>تواصل معنا وسنعود إليك في أقرب وقت ممكن.</p>
                                <a href="#" className="support-btn">قم بملء بياناتك</a>
                            </div>

                        </div>
                    </Col>

                </Row>
            </Container>
        </section>
    );
};

export default Faq;
