import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import offers from "../data/Offer.json";

const Offer = () => {
    return (
        <section className="commerce-section py-5">
            <Container>

                {/* العنوان */}
                <Row className="mb-4 m-auto align-items-center">
                    <Col lg={9} md={8}>
                        <h2 className="commerce-title">
                            نقدم حلول وخدمات مبتكرة لأصحاب التجارة الإلكترونية
                        </h2>
                    </Col>
                    <Col lg={3} md={4}></Col>
                </Row>

                {/* الكروت */}
                <Row className="m-auto">
                    {offers.map((item) => (
                        <Col key={item.id} lg={4} md={6} className="mb-4">
                            <div className="commerce-card">
                                <div className="card-image-wrapper">
                                    <img src={item.image} alt={item.title} className="img-fluid" />

                                    <div className="card-overlay">
                                        <h3>{item.title}</h3>
                                        <p>{item.text}</p>
                                    </div>
                                </div>

                                <div className="card-badge">
                                    <div></div>
                                </div>
                            </div>
                        </Col>
                    ))}
                </Row>

            </Container>
        </section>
    );
};

export default Offer;
