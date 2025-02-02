
import React from "react";
import logo from '../img/Logo.jpeg'
import {Link } from 'react-router-dom';
import './Demo.css';


export default function AdminHeader() {

    return (
        <div className="header" style={{position: 'static',
            backgroundColor: 'rebeccapurple',
            width: '100%',
            left:'0px',
            top:'0',
            zIndex:'9999',
        }}>
            <div style={{left:'10px',position: 'absolute', minWidth:'100%'}}>
                <a href="/Admin"><img src={logo} alt={"Hello"} width={'200px'} height={'100px'}/>
                </a>
            </div>
            <div id='nav' style={{left:'50%', bottom:'-50px', position: 'relative', minWidth:'100%'}}>
                <nav>
                    <ul className='StyleUl'>
                        <Link
                            to="/Researcher"
                        >
                            <li>
                                Researcher
                            </li>
                        </Link>
                        <li>
                            |
                        </li>
                        <Link
                            to="/technician"
                        >
                            <li>
                                Technician
                            </li>
                        </Link>
                        <li>
                            |
                        </li>
                        <Link
                            to='/student'
                        >
                            <li>
                                Students
                            </li>
                        </Link>
                        <li>
                            |
                        </li>
                        <li>
                            <a href={"/SignUp"}> Register</a>
                        </li>
                        {/*</Link>*/}
                        <li>
                            |
                        </li>
                        <li>
                            <a href={"/"}> Logout</a>
                        </li>
                    </ul>
                </nav>
            </div>

            <div id='mobNav' className='mobNavul' style={{left:'0px', top:'88px', position: 'relative'}}>
                <nav>
                    <ul>
                        <Link
                            to="/Researcher"
                        >
                            <li>
                                Researcher
                            </li>
                        </Link>
                        <li>
                            |
                        </li>
                        <Link
                            to="/technician"
                        >
                            <li>
                                Technician
                            </li>
                        </Link>
                        <li>
                            |
                        </li>
                        <Link
                            to='/student'
                        >
                            <li>
                                Students
                            </li>
                        </Link>
                        <li>
                            |
                        </li>
                        <li>
                            <a href={"/SignUp"}> Register</a>
                        </li>
                        {/*</Link>*/}
                        <li>
                            |
                        </li>
                        <li>
                            <a href={"/"}> Logout</a>
                        </li>
                    </ul>
                </nav>
            </div>
        </div>
    )
}

