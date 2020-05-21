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
      <Router>
    <div id="App">
        <Switch>
        <Route path="/" exact component={home}/>
        <Route path="/People" component={People}/>
        <Route path="/Login" component={SignIn}/>
        <Route path="/SignUp" component={SignUp}/>
        <Route path="/Forget" component={ForgetPassword}/>
        <Route path="/Services" component={Services}/>
        </Switch>
    </div>
      </Router>
  );
}

const home = () => (
    <div id="App">
        <Header/>
        <Copyright/>
    </div>
);

export default App;