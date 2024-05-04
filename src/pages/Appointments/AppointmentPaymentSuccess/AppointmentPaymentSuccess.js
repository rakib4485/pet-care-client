import { toast } from 'keep-react';
import React from 'react';
import { Navigate, useNavigate } from 'react-router-dom';

const AppointmentPaymentSuccess = () => {
    const navigate = useNavigate();
    toast.success('Payment successfully Done');
    navigate('/')

    return (
        <div>
            <Navigate to='/'></Navigate>
        </div>
    );
};

export default AppointmentPaymentSuccess;