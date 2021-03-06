import React, { useState } from 'react'
import "../navbar.css";
import { Link } from 'react-router-dom';

export default function Navbar() {
    const [active, setActive] = useState("nav__menu");

    const navToggle = () => {
        active === "nav__menu"
            ? setActive("nav__menu nav__active")
            : setActive("nav__menu");;
    }

    return (
        <nav className="nav">
            <a href="/" className="nav__brand">SCRUM</a>
            <ul className={active}>
                <li className="nav__item"><a href="/Role" className="nav__link">Rollerna</a> </li>
                <li className="nav__item"><a href="/Artifacts" className="nav__link">Scrum artifacts</a> </li>
                <li className="nav__item"><a href="/Sprint" className="nav__link">Sprint</a> </li>
                <li className="nav__item"><a href="/Estimation" className="nav__link">Agil estimering</a> </li>
            </ul>
            <div onClick={navToggle} className="nav__toggler">
                <div className="line1"></div>
                <div className="line2"></div>
                <div className="line3"></div>
            </div>
        </nav>
    )
}
