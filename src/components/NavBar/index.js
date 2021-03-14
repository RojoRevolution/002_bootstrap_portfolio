import React from "react";

function NavBar() {

    return (
        <nav className="navbar navbar-expand-lg navbar-dark border-bottom border-dark position-fixed nav-cust">
            <div className="container-fluid d-flex px-5 py-2 bd-highlight justify-content-center">
                <button className="navbar-toggler p-2" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
                    aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    Menu
            </button>
                <div className="collapse navbar-collapse justify-content-center" id="navbarNav">
                    <ul className="navbar-nav align-items-center my-2">
                        <li className="nav-item px-4 nav-text">
                            <a className="nav-link" aria-current="page" href="/">Home</a>
                        </li>
                        <li className="nav-item px-4 nav-text">
                            <a className="nav-link" href="/work">Portfolio</a>
                        </li>
                        <li className="nav-item px-4 nav-text">
                            <a className="nav-link" href="/about">About / Contact</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}


export default NavBar;