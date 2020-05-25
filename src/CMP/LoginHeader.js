
import React from "react";
import logo from '../img/Logo.jpeg'
import { Link , animateScroll as scroll } from "react-scroll";
import {Link as links} from 'react-router-dom';


export default function LoginHeader() {

    return (
        <div className="header" style={{position: 'fixed',
            backgroundColor: 'rebeccapurple',
            width: '100%',
            left:'0px',
            top:'0',
            height:'100px',
            zIndex:'9999'
        }}>
            <div style={{left:'10px',position: 'absolute'}}>
                <a href="/"><img src={logo} alt={"Hello"} width={'200px'} height={'100px'}/>
                </a>
            </div>
            <div style={{right:'-1100px',bottom: '-50px',position: 'relative'}}>
                <nav>
                    <ul className="StyleUl">

                        <li>
                            <a href={"/"}> Home </a>
                        </li>
                        <li>
                            |
                        </li>
                        <li>
                            <a href={"/Login"}> Login</a>
                        </li>
                        <li>
                            |
                        </li>
                        <li>
                            <a href={"/SignUp"}> Register</a>
                        </li>

                    </ul>
                </nav>
            </div>
        </div>
    );
}

