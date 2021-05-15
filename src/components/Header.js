import React from "react"
import Typed from 'react-typed';
import { Link } from "react-scroll";

const Header = () => {

    return (
        <div id="home" className="header-wrapper">
            <div className="main-info">
                <Typed
                    className="typed-text"
                    strings={[ "Web App Development", "Full-stack Developer"]}
                    typeSpeed={40}
                    backSpeed={60}
                    loop
                />
                <Link smooth={true} to="contacts" className="btn-main-offer">contact me</Link>
            </div>
        </div>
    )
}

export default Header