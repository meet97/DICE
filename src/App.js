import React from 'react';
import './App.css';
import SignIn from "./CMP/Login";
import Header from "./CMP/Header";
import Copyright from './CMP/Footer';
import People from './CMP/People';
import {BrowserRouter as Router , Switch , Route} from 'react-router-dom';
import SignUp from "./CMP/SignUp";
import ForgetPassword from "./CMP/ForgetPassword";
import Services from "./CMP/Services";

function App() {
  return (
      <div>
          <Services/>
          <Header/>
          <People/>


      </div>

  );
}

const home = () => (
    <div id="Home" style={{height:"100%"}}>
<Header/>
        <div style={{position:"relative",bottom:"-630px"}}>

        </div>
        <Copyright/>
    </div>
);

export default App;