import React from "react";
import './App.css';
import LoginForm from "./CMP/Login";
import {BrowserRouter as Router , Switch , Route} from 'react-router-dom';
import SignUp from "./CMP/SignUp";
import ForgetPassword from "./CMP/ForgetPassword";
import HomePage from "./CMP/HomePage";
import AdminHome from "./Pages/AdminHome";
import ResearcherHome from "./Pages/ResearchHome";
import Researcher from "./Pages/Researcher";
import {Component} from "react";
import Technician from "./Pages/Technician";
import Student from "./Pages/Student";
import PasswordChange from "./CMP/PasswordChange";

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {apiResponse: ""};
    }

    componentDidMount()
    {
        fetch("http://127.0.0.1:4500/")
            .then(res => res.text())
            .then(res => this.setState({apiResponse: res}))
            .catch(err => err);
    }

    render() {

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
                        <Route path="/technician" component={Technician}/>
                        <Route path="/student" component={Student}/>
                        <Route path="/ChangePassword" component={PasswordChange}/>
                    </Switch>
                </div>
            </Router>
        );
    }
}
export default App;