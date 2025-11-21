import React, { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import featuresData from "../Data/Features.json";

const Features = () => {
    const [features, setFeatures] = useState([]);

    useEffect(() => {
        setFeatures(featuresData);
    }, []);

    return (
        <section id="features" className="commerce-section py-5">
            <Container>

                {/* العنوان */}
                <Row className="mb-4 m-auto align-items-center">
                    <Col lg={9} md={8}>
                        <h2 className="commerce-title">الخيار الأمثل لتطوير نشاطك التجاري</h2>
                    </Col>
                    <Col lg={3} md={4}></Col>
                </Row>

                {/* الكروت */}
                <Row className="m-auto">
                    {features.map((item) => (
                        <Col key={item.id} lg={4} md={6} className="mb-4">
                            <div className="commerce-card">

                                <div className="card-image-wrapper">
                                    <img src={item.img} alt={item.title} className="img-fluid" />

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

export default Features;
