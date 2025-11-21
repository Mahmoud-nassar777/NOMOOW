import React from 'react'
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Nav, Hero, About, Features, Dashboard, Footer, Cta, Faq, Offer, Why, Pricing } from "../Componants"

const Home = () => {
    const location = useLocation();

    useEffect(() => {
        if (location.hash) {
            const id = location.hash.replace('#', '');
            const el = document.getElementById(id);
            if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
        } else {
            window.scrollTo(0, 0);
        }
    }, [location]);
    return (
        <>
            <Nav />
            <Hero />
            <About />
            <Features />
            <Dashboard />
            <Offer />
            <Why />
            <Pricing />
            <Faq />
            <Cta />
            <Footer />
        </>
    )
}

export default Home
