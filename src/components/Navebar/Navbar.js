import React from 'react';
import { NavLink } from 'react-router-dom';

export default function Navbar() {
    return (
        <>
            <nav>
                <div>
                    <NavLink to="/" className={(nav) => (nav.isActive ? "nav-active" : "")}>Acceuil</NavLink>
                    <NavLink to="/services" className={(nav) => (nav.isActive ? "nav-active" : "")}>Services</NavLink>
                    <NavLink to="/Formulaire_dm" className={(nav) => (nav.isActive ? "nav-active" : "")}>Demander un Service</NavLink>
                </div>
            </nav>
        </>
    );
}
