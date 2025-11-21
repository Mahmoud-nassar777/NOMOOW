import React, { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';
import trafficData from '../Data/Traffic.json';

const Traffic = () => {
    const trafficRef = useRef(null);
    const chartInstance = useRef(null);

    useEffect(() => {
        if (trafficRef.current) {
            // Destroy chart إذا موجود
            if (chartInstance.current) chartInstance.current.destroy();

            chartInstance.current = new Chart(trafficRef.current, {
                type: 'line',
                data: {
                    labels: trafficData.labels,
                    datasets: trafficData.datasets.map(ds => ({
                        ...ds,
                        tension: 0.4,
                        pointRadius: 0,
                        pointHoverRadius: 5
                    }))
                },
                options: {
                    responsive: true,
                    maintainAspectRatio: false,
                    plugins: {
                        legend: { display: false },
                        tooltip: {
                            backgroundColor: 'rgba(44, 20, 83, 0.9)',
                            titleColor: '#ffffff',
                            bodyColor: '#ffffff',
                            borderColor: 'rgba(88, 41, 121, 1)',
                            borderWidth: 1,
                            padding: 12,
                            displayColors: false,
                            callbacks: {
                                label: function (context) {
                                    return context.parsed.y + ' ألف';
                                }
                            }
                        }
                    },
                    scales: {
                        x: {
                            grid: { display: false },
                            ticks: {
                                color: '#6b7280',
                                font: { size: 12, family: 'Almarai' }
                            }
                        },
                        y: {
                            beginAtZero: true,
                            max: 30,
                            ticks: {
                                stepSize: 10,
                                color: '#6b7280',
                                font: { size: 12, family: 'Almarai' },
                                callback: value => (value === 0 ? '0' : value + ' آلاف')
                            },
                            grid: { color: 'rgba(0,0,0,0.05)', drawBorder: false }
                        }
                    }
                }
            });
        }

        return () => {
            if (chartInstance.current) chartInstance.current.destroy();
        };
    }, []);

    return (
        <div className="traffic-section">
            <div className="traffic-container">
                {/* Left Panel */}
                <div className="traffic-list-panel">
                    <div className="traffic-list-header">
                        <h3 className="traffic-list-title">حركة المرور حسب الموقع الإلكتروني</h3>
                        <div className="traffic-list-icon">
                            <i className="bi bi-calendar-check"></i>
                        </div>
                    </div>
                    <ul className="traffic-websites-list">
                        {trafficData.websites.map((site, idx) => (
                            <li className="traffic-website-item" key={idx}>
                                <span className="website-name">{site.name}</span>
                                <div className="website-line">
                                    <div
                                        className="website-line-fill"
                                        style={{ width: site.traffic + '%' }}
                                    ></div>
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Right Panel */}
                <div className="traffic-chart-panel">
                    <div className="traffic-chart-header">
                        <div className="traffic-chart-icons">
                            <button className="traffic-icon-btn">
                                <i className="bi bi-three-dots-vertical"></i>
                            </button>
                            <button className="traffic-icon-btn">
                                <i className="bi bi-calendar-check"></i>
                            </button>
                        </div>
                        <h3 className="traffic-chart-title">حركة المرور حسب الموقع الإلكتروني</h3>
                    </div>
                    <div className="traffic-chart-container">
                        <canvas id="trafficChart" ref={trafficRef}></canvas>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Traffic;
