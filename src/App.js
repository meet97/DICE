import React, {Component} from 'react';
import './App.css';
import LoginForm from "./CMP/Login";
import {BrowserRouter as Router , Switch , Route} from 'react-router-dom';
import SignUp from "./CMP/SignUp";
import ForgetPassword from "./CMP/ForgetPassword";
import HomePage from "./CMP/HomePage";
import AdminHome from "./Pages/AdminHome";
import ResearcherHome from "./Pages/ResearchHome";
import Researcher from "./Pages/Researcher";
import Technician from "./Pages/Technician";
import Student from "./Pages/Student";
import PasswordChange from "./CMP/PasswordChange";
import LoginError from "./CMP/LoginError";
import SignUpResearcher from "./CMP/SignuUpResearch";

class App extends Component {
    // state = {
    //     service_id:'',
    //     service_name: '',
    //     posts: []
    // };
    //
    // mountService = () =>
    // {
    //     this.getService();
    // }
    // getService = () => {
    //     Axios.get('/api')
    //         .then((response) => {
    //             const data = response.data;
    //             this.setState({post: data})
    //             console.log("Data has been received");
    //         })
    //         .catch(() => {
    //             alert("Error receiving data");
    //         })
    // };

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
                        <Route path="/signIn" component={LoginError}/>
                        <Route path="/PasswordChange" component={PasswordChange}/>
                        <Route path="/SignUpRe" component={SignUpResearcher}/>
                    </Switch>
                </div>
            </Router>
        );
    }
}
export default App;