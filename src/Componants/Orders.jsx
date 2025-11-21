import React from 'react';
import ordersData from '../Data/Orders.json';

const Orders = () => {
    // Helper لتحديد الـ class الخاص بالـ status
    const getStatusClass = (status) => {
        switch (status.toLowerCase()) {
            case 'قيد التقدم':
                return 'status-in-progress';
            case 'مكتمل':
                return 'status-completed';
            case 'معلق':
                return 'status-pending';
            case 'موافق عليه':
                return 'status-approved';
            case 'مرفوض':
                return 'status-rejected';
            default:
                return '';
        }
    };

    return (
        <div className="orders-table-section">
            <div className="orders-table-header">
                <button className="orders-table-menu-btn">
                    <i className="bi bi-three-dots-vertical"></i>
                </button>
                <h3 className="orders-table-title">آخر 5 طلبات</h3>
            </div>
            <div className="orders-table-container">
                <table className="orders-table">
                    <thead>
                        <tr>
                            <th>الحالة</th>
                            <th>المبلغ</th>
                            <th>التاريخ</th>
                            <th>المنتج</th>
                        </tr>
                    </thead>
                    <tbody>
                        {ordersData.orders.map((order, idx) => (
                            <tr key={idx}>
                                <td>
                                    <span className={`order-status ${getStatusClass(order.status)}`}>
                                        {order.status}
                                    </span>
                                </td>
                                <td>{order.amount}</td>
                                <td>{order.date}</td>
                                <td>
                                    <i className="bi bi-diamond-fill"></i> {order.product}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Orders;
