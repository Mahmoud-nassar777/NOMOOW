// src/Componants/Cta.jsx
import React from 'react';
import { Container } from 'react-bootstrap';

const Cta = () => {
    return (
        <section className="cta-section">
            <Container>
                <div className="cta-content text-center">
                    <h2>هل أنت مستعد للدخول في عالم المتاجر الإلكترونية</h2>
                    <a href="#" className="cta-btn">قدم معنا الآن</a>
                </div>
            </Container>
        </section>
    );
};

export default Cta;
