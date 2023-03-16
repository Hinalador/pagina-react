import React from "react";
import "../Stylesheets/Header.css";

function Header(props) {
    return(
        <header>
            <div>
                <img src={require(`../Img/${props.logo}`.png)} alt="" />
            </div>
            <div className="espacio"></div>
            <nav className="navbar">
                <div className="divsnav">
                    <a className="a1" href="http://www.google.com">{props.bt1}</a>
                </div>
                <div className="divsnav">
                    <a className="a1" href="http://www.google.com">{props.bt2}</a>
                </div>
                <div className="divsnav">
                    <a className="a1" href="http://www.google.com">{props.bt3}</a>
                </div>
            </nav>
        </header>
    )
}

export default Header;