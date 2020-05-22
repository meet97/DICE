import React from 'react';
import './App.css';
import SignIn from "./CMP/Login";
import Header from "./CMP/Header";
import Copyright from './CMP/Footer';
import {BrowserRouter as Router , Switch , Route} from 'react-router-dom';
import SignUp from "./CMP/SignUp";
import ForgetPassword from "./CMP/ForgetPassword";
import HomePage from "./CMP/HomePage";

function App() {
  return (
      <Router>
    <div id="App">
        <Switch>

        <Route path="/" exact component={home}/>
        <Route path="/HomePage"  component={HomePage}/>
        <Route path="/Login" component={SignIn}/>
        <Route path="/SignUp" component={SignUp}/>
        <Route path="/Forget" component={ForgetPassword}/>
        </Switch>
    </div>
      </Router>
  );
}

const home = () => (
    <div id="App">
        <Header/>
        <HomePage/>
        <Copyright/>
    </div>
);

export default App;