import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import pricingData from "../Data/Pricing.json";

const Pricing = () => {
    return (
        <section id="pricing" className="pricing-section py-5">
            <Container>

                <Row className="m-auto justify-content-center">
                    <Col lg={8} className="text-center">
                        <h2 className="pricing-title">أسعار مُصممة خصيصاً لتلبية احتياجاتك!</h2>

                        <div className="pricing-toggle d-inline-flex align-items-center">
                            <span>شهري</span>

                            <label className="switch mx-3">
                                <input type="checkbox" defaultChecked />
                                <span className="slider"></span>
                            </label>

                            <span>سنوي</span>
                        </div>
                    </Col>
                </Row>

                <Row className="mt-5 m-auto">
                    {pricingData.map((item, index) => (
                        <Col key={index} lg={4} md={6} className="mb-4">
                            <div className="pricing-card">

                                <div className={`pricing-header ${item.headerClass}`}>
                                    {item.header}
                                </div>

                                <div className="pricing-value">
                                    <span className="price">{item.price}</span>
                                    {item.currency && <span className="currency">{item.currency}</span>}
                                    <span className="period">{item.period}</span>
                                </div>

                                {item.commission && (
                                    <p className="pricing-commission">{item.commission}</p>
                                )}

                                <a href="#" className="pricing-btn">اختيار</a>

                                <ul className="pricing-list">
                                    {item.list.map((li, i) => (
                                        <li key={i}>
                                            <i className="bi bi-check-circle-fill"></i>
                                            {li}
                                        </li>
                                    ))}
                                </ul>

                            </div>
                        </Col>
                    ))}
                </Row>

            </Container>
        </section>
    );
};

export default Pricing;
