import React, {Component} from "react";
import '../CMP/Demo.css'
import 'tachyons';
import AdminHeader from "../CMP/AdminHeader";
import Copyright from "../CMP/Footer";
import PeopleDeleteList from "../CMP/PeopleDeleteList";

class Researcher extends Component
{
    constructor(props){
        super(props)
        this.state={
            team:[]
        }
    }

    componentDidMount() {
        this.callApi()
            .then(res => this.setState({team: res}))
            .catch(err => console.log(err));

        console.log(this.state.team)
    }

    callApi = async () => {
        const response = await fetch("http://localhost:4500/team");
        const body = await response.json();
        if (response.status !== 200) throw Error(body.message);

        return body;
    };
    render() {
        const peopleList =this.state.team;
        console.log(this.state.team);
        const peopleHolher = peopleList.map( (temp, i) => {
            return <PeopleDeleteList key={i} id={peopleList[i].id} name={peopleList[i].fname} work={peopleList[i].role}/>
        });
        return(
            <div>
                <AdminHeader/>
                <div id="People" style={{width:'100%'}}>
                    <div>
                        <h1 style={{textAlign:"Center", color:"rebeccapurple", paddingTop:"75px", paddingBottom:'5px'}}>Researchers</h1>
                        {peopleHolher}
                    </div>
                </div>
                <Copyright/>
            </div>
        )
    }
}

export default Researcher;