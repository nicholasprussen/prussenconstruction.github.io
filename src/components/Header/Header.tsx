import React from "react";
import { Link } from "react-router-dom";
import prussenconslogo from "../../prussenconslogo.png";

const Header = () => {
    return (
        <header className="w-full h-auto p-4 bg-dark">
            <div className="md:container md:mx-auto grid grid-cols-[auto_1fr_auto] justify-between items-center">
                <div className="logo-container">
                    <img className="max-h-20" src={prussenconslogo}></img>
                </div>
                <div></div>
                <div className="nav-container">
                    <Link to={"about"}>About</Link>
                    <Link to={"contact"}>Contact</Link>
                </div>  
            </div>
        </header>
    )
}

export default Header;