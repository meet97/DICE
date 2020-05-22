
import React from "react";
import logo from '../img/Logo.jpeg'
import { Link, animateScroll as scroll } from "react-scroll";

export default function Header() {

    return (
        <div className="header" style={{position: 'fixed',
            backgroundColor: 'rebeccapurple',
            width: '100%',
            left:'0px',
            top:'0',
            height: '100px',
            zIndex:'9999'
            }}>
        <div style={{left:'10px',position: 'absolute'}}>
            <Link to="/"><img src={logo} alt={"Hello"} width={'200px'} height={'100px'}/>
            </Link>
        </div>
            <div style={{right:'-700px',bottom: '-50px',position: 'relative'}}>
                <nav>
                <ul className="StyleUl">
                    <Link
                        activeClass="active"
                        to="Home"
                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration= {500}
                    >
                        <li>
                            About
                        </li>
                    </Link>
                    <li>
                        |
                    </li>
                    <Link
                        activeClass="active"
                        to="Services"
                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration= {500}
                    >
                        <li>
                            Services
                        </li>
                    </Link>
                    <li>
                        |
                    </li>
                    <Link
                        activeClass="active"
                        to="People"
                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration= {500}
                    >
                        <li>
                            People
                        </li>
                    </Link>
                    <li>
                        |
                    </li>
                    <Link to="/Login">
                        <li>
                            Projects
                        </li>
                    </Link>
                    <li>
                        |
                    </li>
                    <li>
                        Contact
                    </li>
                    <li>
                         |
                    </li>
                    <Link to="/Login">
                        <li>
                            Login
                        </li>
                    </Link>
                    <li>
                        |
                    </li>
                    <Link to="/SignUp">
                        <li>
                            Register
                        </li>
                    </Link>
                </ul>
                </nav>
            </div>
        </div>
    )
}

