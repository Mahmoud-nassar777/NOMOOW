import React, { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';
import statsData from '../Data/Stats.json';

const Stats = () => {
    const completedRef = useRef(null);
    const activeRef = useRef(null);
    const revenueRef = useRef(null);
    const charts = useRef({}); // لتخزين الـ chart objects

    useEffect(() => {
        const createChart = (ref, data, type = 'bar') => {
            if (charts.current[ref.current.id]) {
                charts.current[ref.current.id].destroy();
            }
            charts.current[ref.current.id] = new Chart(ref.current, {
                type: type,
                data: data,
                options: {
                    responsive: true,
                    maintainAspectRatio: false,
                    plugins: { legend: { display: false } },
                    scales: {
                        x: { display: false, grid: { display: false } },
                        y: { display: false, grid: { display: false } }
                    }
                }
            });
        };

        statsData.cards.forEach(card => {
            let ref;
            if (card.id === 'completedOrdersChart') ref = completedRef;
            else if (card.id === 'activeOrdersChart') ref = activeRef;
            else ref = revenueRef;

            createChart(ref, card.chartData, card.id === 'activeOrdersChart' ? 'line' : 'bar');
        });

        return () => {
            Object.values(charts.current).forEach(chart => chart.destroy());
        };
    }, []);

    return (
        <div className="stats-cards-row">
            {statsData.cards.map((card, idx) => (
                <div className="stat-card" key={idx}>
                    <div className="stat-card-header">
                        <h3 className="stat-card-title">{card.title}</h3>
                        <div className={`stat-card-icon ${card.type}`}>
                            <i className={`bi ${card.icon}`}></i>
                        </div>
                    </div>
                    <div className="stat-card-chart">
                        <canvas
                            id={card.id}
                            ref={
                                card.id === 'completedOrdersChart'
                                    ? completedRef
                                    : card.id === 'activeOrdersChart'
                                        ? activeRef
                                        : revenueRef
                            }
                            className="mini-chart"
                        ></canvas>
                    </div>
                    <div className="stat-card-value">{card.value}</div>
                    <div className="stat-card-trend">
                        <i className={`bi ${card.trendIcon}`}></i>
                        <span>{card.trendText}</span>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Stats;
