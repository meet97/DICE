
import React from "react";
import logo from '../img/Logo.jpeg'
import { Link } from "react-scroll";
import {Link as links} from 'react-router-dom';


export default function ResearcherHeader() {

    return (
        <div className="header" style={{
            backgroundColor: 'rebeccapurple',
            width: '100%',
            position:'sticky',
            zIndex:'9999',
        }}>
            <div style={{left:'10px',position: 'absolute', minWidth:'100%'}}>
                <a href="/"><img src={logo} alt={"Hello"} width={'200px'} height={'100px'}/>
                </a>
            </div>
            <div id='nav' style={{left:'55%', bottom:'-50px', position: 'relative', minWidth:'100%'}}>
                <nav>
                    <ul className="StyleUl">
                        <Link
                            activeClass="active"
                            to="Researcher"
                            spy={true}
                            smooth={'easeInOutQuint'}
                            offset={-70}
                            duration= {1500}
                            scrollsnap={true}
                        >
                            <li>
                                Profile
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
                                Technician
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
                                Students
                            </li>
                        </Link>
                        <li>
                            |
                        </li>
                        <li>
                            <a href={"/SignUp"}> Logout</a>
                        </li>
                        {/*</Link>*/}
                    </ul>
                </nav>
            </div>

            <div id='mobNav' className='mobNavul' style={{left:'0px', top:'88px', position: 'relative'}}>
                <nav>
                    <ul>
                        <Link
                            activeClass="active"
                            to="Researcher"
                            spy={true}
                            smooth={'easeInOutQuint'}
                            offset={-70}
                            duration= {1500}
                            scrollsnap={true}
                        >
                            <li>
                                Profile
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
                                Technician
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
                                Students
                            </li>
                        </Link>
                        <li>
                            |
                        </li>
                        <li>
                            <a href={"/SignUp"}> Logout</a>
                        </li>
                        {/*</Link>*/}
                    </ul>
                </nav>
            </div>
        </div>
    )
}

