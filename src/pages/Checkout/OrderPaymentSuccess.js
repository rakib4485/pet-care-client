import React from 'react';
import { Navigate } from 'react-router-dom';

const OrderPaymentSuccess = () => {
    return (
        <div>
             <Navigate to='/dashboard/my-order'></Navigate>
        </div>
    );
};

export default OrderPaymentSuccess;