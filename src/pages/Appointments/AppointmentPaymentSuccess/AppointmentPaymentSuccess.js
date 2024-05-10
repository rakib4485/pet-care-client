import { toast } from 'keep-react';
import React from 'react';
import { Navigate, useNavigate } from 'react-router-dom';

const AppointmentPaymentSuccess = () => {
    const navigate = useNavigate();
    toast.success('Payment successfully Done');
    navigate('/dashboard')

    return (
        <div>
            <Navigate to='/dashboard'></Navigate>
        </div>
    );
};

export default AppointmentPaymentSuccess;