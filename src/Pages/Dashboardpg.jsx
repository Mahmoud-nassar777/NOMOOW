// src/Pages/Dashboardpg.jsx
import React, { useState } from 'react'
import { Aside, Header, Stats, Traffic, Orders } from "../Componants"

const Dashboardpg = () => {
    const [sidebarActive, setSidebarActive] = useState(false);

    const openSidebar = () => {
        setSidebarActive(true);
        document.body.style.overflow = 'hidden';
    };

    const closeSidebar = () => {
        setSidebarActive(false);
        document.body.style.overflow = '';
    };

    return (
        <div className="dashboard-wrapper" >
            <Aside sidebarActive={sidebarActive} onClose={closeSidebar} />

            <main className="dashboard-main">
                <Header onMenuToggle={openSidebar} />
                <section className="dashboard-section-content">
                    <div className="container-fluid p-4">
                        <Stats />
                        <Traffic />
                        <Orders />
                    </div>
                </section>
            </main>

        </div>
    )
}

export default Dashboardpg
