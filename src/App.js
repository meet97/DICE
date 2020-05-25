import React from 'react';
import './App.css';
import SignIn from "./CMP/Login";
import {BrowserRouter as Router , Switch , Route} from 'react-router-dom';
import SignUp from "./CMP/SignUp";
import ForgetPassword from "./CMP/ForgetPassword";
import HomePage from "./CMP/HomePage";

function App() {
  return (
      <Router>
          <div id="App" >
              <Switch>
                  <Route path="/" exact component={HomePage}/>
                  <Route path="/Login" component={SignIn}/>
                  <Route path="/SignUp" component={SignUp}/>
                  <Route path="/Forget" component={ForgetPassword}/>
              </Switch>
          </div>
      </Router>


  );
}

export default App;