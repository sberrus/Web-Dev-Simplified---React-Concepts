import React from "react";
import Logo from "../../assets/react-logo.png";

const Header = () => {
    return (
        <div className="container-fluid p-0">
            <nav className="navbar navbar-dark bg-dark ">
                <div className="container">
                    <a className="navbar-brand" href="/">
                        <img src={Logo} alt="" width="30" className="d-inline-block align-text-top" />
                    </a>
                    <h5 className="float-end text-light">Web Dev Simplified - React a Fondo</h5>
                </div>
            </nav>
        </div>
    );
};

export default Header;
