import React, { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import offersData from "../Data/Offer.json";

// استيراد الصور من assets
import call1 from "../assets/call-center-1.png";
import call2 from "../assets/call-center-2.png";
import call3 from "../assets/call-center-3.png";

// ربط المفتاح بالصور
const imagesMap = {
  call1,
  call2,
  call3,
};

const Offer = () => {
  const [offers, setOffers] = useState([]);

  useEffect(() => {
    const dataWithImages = offersData.map((item) => ({
      ...item,
      image: imagesMap[item.image],
    }));
    setOffers(dataWithImages);
  }, []);

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
