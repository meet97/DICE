
import React from "react";
import logo from '../img/logo.png'
import {Link} from 'react-router-dom';

export default function Header() {

    return (
        <div className="header" style={{position: 'fixed',
            backgroundColor: 'rebeccapurple',
            width: '100%',
            left:'0px',
            top:'0',
            height: '100px'
            }}>
        <div style={{left:'10px',position: 'absolute'}}>
            <Link to="/"><img src={logo} alt={"Hello"} width={'200px'} height={'100px'}/>
            </Link>
        </div>
            <div style={{right:'-700px',bottom: '-50px',position: 'relative'}}>
                <nav>
                <ul className="StyleUl">
                    <Link to="/Login">
                        <li>
                            About
                        </li>
                    </Link>
                    <li>
                        |
                    </li>
                    <Link to="/People">
                        <li>
                            People
                        </li>
                    </Link>
                    <li>
                        |
                    </li>
                    <Link to="/Services">
                        <li>
                            Services
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

