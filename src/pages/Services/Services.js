import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import Logo from '../../components/Logo';

const Services = () => {
    return (
        <div>
            <Logo />
            <h1>Nos Services</h1>
            <nav>
                <div>
                    <NavLink to='/services/lavage' className={(nav) => (nav.isActive ? "nav-active" : "")} > Services de Lavage</NavLink>
                    <NavLink to='/services/menage' className={(nav) => (nav.isActive ? "nav-active" : "")}> Services de menage</NavLink>
                </div>
            </nav>
            <Outlet />
        </div>
    );
};

export default Services;