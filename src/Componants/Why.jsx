import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import whyData from "../Data/Why.json";

const Why = () => {
    return (
        <section className="why-nomoow-section py-5">
            <Container>

                <Row className="justify-content-center mb-5 m-auto">
                    <Col xs={12} className="text-center">
                        <h2 className="why-title">لماذا منصة نمو !!</h2>
                    </Col>
                </Row>

                <Row className="m-auto">
                    {whyData.map((item, i) => (
                        <Col key={i} lg={3} md={6} className="mb-4">
                            <div className="why-card">
                                <div className="icon-wrapper">
                                    <i className={item.icon}></i>
                                </div>
                                <h3>{item.title}</h3>
                                <p>{item.text}</p>
                                <a href="#" className="why-link">اشترك الآن</a>
                            </div>
                        </Col>
                    ))}
                </Row>

            </Container>
        </section>
    );
};

export default Why;
