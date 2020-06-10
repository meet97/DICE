import React, {Component} from "react";
import './Demo.css';
import 'tachyons';
import ServiceList from "./ServicesList";


class Services extends Component
{
    constructor(props){
        super(props);
        this.state={
            services:[]
        }
    }

    componentDidMount() {
        this.callApi()
            .then(res => this.setState({services: res}))
            .catch(err => console.log(err));

        console.log(this.state.services)
    }

    callApi = async () => {
        const response = await fetch("http://localhost:4500/getServices");
        const body = await response.json();
        if (response.status !== 200) throw Error(body.message);

        return body;
    };

    render() {

        // const arrayList = [
        //     {
        //         id:1,
        //         name:"Concept Validation",
        //     },
        //     {
        //         id:2,
        //         name:"Process Optimization",
        //
        //     },
        //     {
        //         id:3,
        //         name:"Big Data Storage and Analytics",
        //
        //     },
        //     {
        //         id:4,
        //         name:"Automation of Systems",
        //
        //     },
        //     {
        //         id:5,
        //         name:"Digital Analytical Services",
        //
        //     },
        //     {
        //         id:6,
        //         name:"Network Analysis",
        //
        //     },
        //     {
        //         id:7,
        //         name:"Prototype Development",
        //
        //     },
        //     {
        //         id:8,
        //         name:"Proof of Concept",
        //
        //     },
        //     {
        //         id:9,
        //         name:"Software Design and Project Management",
        //
        //     },
        //     {
        //         id:10,
        //         name:"IoT Sensor Integration",
        //
        //     },
        //     {
        //         id:11,
        //         name:"Predictive Maintenance",
        //
        //     },
        //     {
        //         id:12,
        //         name:"AI / ML / Deep Learning",
        //
        //     },
        //     {
        //         id:13,
        //         name:"Customized Training",
        //
        //     },
        //     {
        //         id:14,
        //         name:"Autonomous Vehicle Development",
        //
        //     },
        //     {
        //         id:15,
        //         name:"Software Re-Design and Improvement",
        //
        //     },
        //     {
        //         id:16,
        //         name:"Cyber Security",
        //
        //     },
        //     {
        //         id:17,
        //         name:"Virtual, Mixed and Augmented Reality",
        //
        //     }
        // ];

        const servicesList =this.state.services;
        console.log(this.state.services);
        const valueHol = servicesList.map( (temp, i) => {
            return <ServiceList id={servicesList[i].service_id} name={servicesList[i].service_name}/>
        });

//test
        return (
            <div id="Services">

                    <h1 style={{color:"rebeccapurple",paddingTop:"70px",textAlign:"center", paddingBottom:"80px"}}>Services</h1>
                    {valueHol}

            </div>)
    }
}

export default Services;