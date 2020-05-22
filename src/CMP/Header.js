
import React from "react";
import Saskatchewan_Polytechnic_4C from './Saskatchewan_Polytechnic_4C.jpg'
import {Link} from 'react-router-dom';

export default function Header() {

    return (
        <div className="header" style={{position: 'fixed',
            backgroundColor: 'rebeccapurple',
            width: '100%',
            top:'0',
            height: '100px'
            }}>
        <div style={{left:'10px',position: 'absolute'}}>
            <Link to="/"><img src={Saskatchewan_Polytechnic_4C} alt={"Hello"} width={'200px'} height={'100px'}/>
            </Link>
        </div>
            <div style={{right:'-750px',bottom: '-50px',position: 'relative'}}>
                <nav>
                <ul className="StyleUl">
                    <Link to="/HomePage">
                        <li>
                            About
                        </li>
                    </Link>
                    <li>
                        |
                    </li>
                    <Link to="/Login">
                        <li>
                            People
                        </li>
                    </Link>
                    <li>
                        |
                    </li>
                    <Link to="/Login">
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

