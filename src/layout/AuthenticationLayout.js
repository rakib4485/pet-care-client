import React from 'react';
import NavbarComponent from '../Shared/Navbar/Navbar';
import { Outlet } from 'react-router-dom';

const AuthenticationLayout = () => {
    return (
        <div>
            <NavbarComponent/>
            <Outlet/>
        </div>
    );
};

export default AuthenticationLayout;