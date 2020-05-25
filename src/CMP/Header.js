
import React from "react";
import logo from '../img/Logo.jpeg'
import { Link } from "react-scroll";
import {Link as links} from 'react-router-dom';


export default function Header() {

    return (
        <div className="header" style={{position: 'fixed',
            backgroundColor: 'rebeccapurple',
            width: '100%',
            left:'0px',
            top:'0',
            height:'100px',
            zIndex:'9999',
            minWidth:'1220px'
            }}>
        <div style={{left:'10px',position: 'absolute', minWidth:'100%'}}>
            <links to="/"><img src={logo} alt={"Hello"} width={'200px'} height={'100px'}/>
            </links>
        </div>
            <div style={{left:'55%', bottom:'-50px', position: 'relative', minWidth:'100%'}}>
                <nav>
                <ul className="StyleUl">
                    <Link
                        activeClass="active"
                        to="About"
                        spy={true}
                        smooth={'easeInOutQuint'}
                        offset={-70}
                        duration= {1500}
                        scrollsnap={true}
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
                        smooth={'easeInOutQuint'}
                        offset={-70}
                        duration= {1500}
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
                        smooth={'easeInOutQuint'}
                        offset={-70}
                        duration= {1500}
                    >
                        <li>
                            People
                        </li>
                    </Link>
                    <li>
                        |
                    </li>
                    <Link to="/Login"
                          activeClass="active">
                        <li>
                            Projects
                        </li>
                    </Link>
                    <li>
                        |
                    </li>
                    <Link
                        activeClass="selected"
                        to="Contact"
                        spy={true}
                        smooth={'easeInOutQuint'}
                        offset={70}
                        duration= {1500}

                    >
                        <li>
                            Contact
                        </li>
                    </Link>
                    <li>
                         |
                    </li>
                    <links to="/Login">
                        <li>
                            Login
                        </li>
                    </links>
                    <li>
                        |
                    </li>
                    <links to="/SignUp">
                        <li>
                            Register
                        </li>
                    </links>
                </ul>
                </nav>
            </div>
        </div>
    )
}

