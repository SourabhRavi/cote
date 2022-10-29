import React from 'react';
import SignOut from './SignOut';
import logo from './logo.svg';

function Navbar() {
    return (
        <>
            <nav className="navbar navbar-expand-lg sticky-top">
                <div className="container-fluid">
                    <a className="navbar-brand" href="/" style={{ color: "#fff" }}>
                        <img src={logo} alt="Logo" width="30" height="24" class="d-inline-block align-text-top me-3"></img>Cote</a>
                    <SignOut />
                </div>
            </nav>
        </>
    )
}

export default Navbar;