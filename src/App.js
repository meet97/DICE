import React from 'react';
import './App.css';
import LoginForm from "./CMP/Login";
import {BrowserRouter as Router , Switch , Route} from 'react-router-dom';
import SignUp from "./CMP/SignUp";
import ForgetPassword from "./CMP/ForgetPassword";
import HomePage from "./CMP/HomePage";
import AdminHome from "./Pages/AdminHome";
import ResearcherHome from "./Pages/ResearchHome";
import People from "./CMP/People";
import Researcher from "./Pages/Researcher";


function App() {
  return (
      <Router>
          <div id="App">
              <Switch>
                  <Route path="/" exact component={HomePage}/>
                  <Route path="/Login" component={LoginForm}/>
                  <Route path="/SignUp" component={SignUp}/>
                  <Route path="/Forget" component={ForgetPassword}/>
                  <Route path="/Admin" component={AdminHome}/>
                  <Route path="/Research" component={ResearcherHome}/>
                  <Route path="/Researcher" component={Researcher}/>
              </Switch>
          </div>
      </Router>
  );
}

export default App;