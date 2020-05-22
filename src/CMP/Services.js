import React, {Component} from "react";
import './Demo.css';
import 'tachyons';
import Copyright from "./Footer";
import ServiceList from "./ServicesList";
import Header from "./Header";


class Services extends Component
{
    constructor()
    {
        super();
        this.state = { name : "Welcome to my world"}
    }

    nameChange()
    {
        this.setState({
            name : "Welcome to DICE"
        })
    }
    render() {

        const arrayList = [
            {
                id:1,
                name:"Concept Validation",
            },
            {
                id:2,
                name:"Process Optimization",

            },
            {
                id:3,
                name:"Big Data Storage and Analytics",

            },
            {
                id:4,
                name:"Automation of Systems",

            },
            {
                id:5,
                name:"Digital Analytical Services",

            },
            {
                id:6,
                name:"Network Analysis",

            },
            {
                id:7,
                name:"Prototype Development",

            },
            {
                id:8,
                name:"Proof of Concept",

            },
            {
                id:9,
                name:"Software Design and Project Management",

            },
            {
                id:10,
                name:"IoT Sensor Integration",

            },
            {
                id:11,
                name:"Predictive Maintenance",

            },
            {
                id:12,
                name:"AI / ML / Deep Learning",

            },
            {
                id:13,
                name:"Customized Training",

            },
            {
                id:14,
                name:"Autonomous Vehicle Development",

            },
            {
                id:15,
                name:"Software Re-Design and Improvement",

            },
            {
                id:16,
                name:"Cyber Security",

            },
            {
                id:17,
                name:"Virtual, Mixed and Augmented Reality",

            }
        ]

        const valueHol = arrayList.map( (temp, i) => {
            return <ServiceList id={arrayList[i].id} name={arrayList[i].name}/>
        })


        return (
            <div className={"mainPag"} id="Services">

                    <h1 style={{color:"rebeccapurple",alignment:'center'}}>Services</h1>
                    {valueHol}


            </div>)
    }
}

export default Services;