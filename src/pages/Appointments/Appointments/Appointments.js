import React from 'react';
import AppointmentBanner from '../AppintmentBanner/AppointmentBanner';
import Doctors from '../Doctors/Doctors';

const Appointments = () => {
    return (
        <div>
            <AppointmentBanner/>
            <Doctors/>
        </div>
    );
};

export default Appointments;