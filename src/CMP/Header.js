
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
            zIndex:'9999',
            }}>
        <div style={{left:'10px',position: 'absolute', minWidth:'100%'}}>
            <links to="/"><img id='logo' src={logo} alt={"Hello"} height={'100px'}/>
            </links>
        </div>
            <div id='nav' style={{left:'55%', bottom:'-50px', position: 'relative', minWidth:'100%'}}>
                <nav>
                <ul className="StyleUl">
                    <Link
                        activeClass="active"
                        to="About"
                        spy={true}
                        smooth={'easeInOutQuint'}
                        offset={-100}
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
                            Team
                        </li>
                    </Link>
                    <li>
                        |
                    </li>
                    <Link
                        activeClass="active"
                        to="Project"
                        spy={true}
                        smooth={'easeInOutQuint'}
                        offset={-100}
                        duration= {1500}
                        scrollsnap={true}
                    >
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
                    {/*<Link to="/Login">*/}

                        <li>
                            <a href={"/Login"}> Login</a>
                        </li>
                    {/*</Link>*/}
                    <li>
                        |
                    </li>
                    {/*<Link to="/SignUp">*/}
                        <li>
                            <a href={"/SignUp"}> Register</a>
                        </li>
                    {/*</Link>*/}
                </ul>
                </nav>
            </div>
            <div id='mobNav' className='mobNavul' style={{left:'0', top:'88px', position: 'relative', minWidth:'100%'}}>
                <nav>
                    <ul>
                        <Link
                            activeClass="active"
                            to="About"
                            spy={true}
                            smooth={'easeInOutQuint'}
                            offset={-110}
                            duration= {1500}
                            scrollsnap={true}
                        >
                            <li>
                                About
                            </li>
                        </Link>
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

                        <Link
                            activeClass="active"
                            to="People"
                            spy={true}
                            smooth={'easeInOutQuint'}
                            offset={-70}
                            duration= {1500}
                        >
                            <li>
                                Team
                            </li>
                        </Link>

                        <Link
                            activeClass="active"
                            to="Project"
                            spy={true}
                            smooth={'easeInOutQuint'}
                            offset={-150}
                            duration= {1500}
                            scrollsnap={true}
                        >
                            <li>
                                Projects
                            </li>
                        </Link>
                        {/*<Link to="/Login">*/}
                        <li>
                            <a href={"/Login"}> Login</a>
                        </li>
                    </ul>
                </nav>
            </div>
        </div>
    )
}

