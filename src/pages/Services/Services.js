import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import Logo from '../../components/Logo';

const Services = () => {
    return (
        <div>
            <Logo />
            {/* <h1>Nos Services</h1> */}
            <div class="row row-cols-1 row-cols-md-3 g-4">
                <div class="col">
                    <div class="card h-100">
                        <img src="./img/Education.jpeg" class="card-img-top" alt="..." />
                        <div class="card-body">
                            <h5 class="card-title">Card title</h5>
                            {/* <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p> */}
                        </div>
                        <div class="card-footer">
                            <small class="text-muted">Last updated 3 mins ago</small>
                        </div>
                    </div>
                </div>
                <div class="col">
                    <div class="card h-100">
                        <img src="./img/carlage.JPG" class="card-img-top" alt="..." />
                        <div class="card-body">
                            <h5 class="card-title">Card title</h5>
                            {/* <p class="card-text">This card has supporting text below as a natural lead-in to additional content.</p> */}
                        </div>
                        <div class="card-footer">
                            <small class="text-muted">Last updated 3 mins ago</small>
                        </div>
                    </div>
                </div>
                <div class="col">
                    <div class="card h-100">
                        <img src="./img/decoration.jpg" class="card-img-top" alt="..." />
                        <div class="card-body">
                            <h5 class="card-title">Card title</h5>
                            {/* <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</p> */}
                        </div>
                        <div class="card-footer">
                            <small class="text-muted">Last updated 3 mins ago</small>
                        </div>
                    </div>
                </div>
            </div>

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