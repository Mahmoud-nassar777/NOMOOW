import React from "react";
import { Container, Row, Col } from "react-bootstrap";

// استيراد الصورة بطريقة Vite/React
import dashboardImg from "../assets/dashboard.png";

const Dashboard = () => {
    return (
        <section className="dashboard-section py-5">
            <Container>
                <Row className="m-auto align-items-center">

                    {/* الصورة */}
                    <Col lg={5} md={12} className="order-2 order-lg-1">
                        <div className="dashboard-image-wrapper">
                            <img
                                src={dashboardImg}
                                alt="لوحة القيادة الرقمية"
                                className="dashboard-main-img img-fluid"
                            />
                        </div>
                    </Col>

                    {/* النص */}
                    <Col lg={7} md={12} className="order-1 order-lg-2">
                        <div className="dashboard-content">
                            <h2>أجعل تسويق منتجاتك أمراً بسيطاً وسلساً مع أدواتنا المتقدمة</h2>
                            <p>
                                لوحة القيادة لدينا تجعل إدارة متجرك أمراً سهلاً ومريحاً، مما يعزز من تجربتك في التحكم الكامل
                                لمتجرك.
                            </p>
                        </div>
                    </Col>

                </Row>
            </Container>
        </section>
    );
};

export default Dashboard;
