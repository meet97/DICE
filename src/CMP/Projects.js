import React, {Component} from "react";
import './Demo.css';
import 'tachyons';
import ServiceList from "./ServicesList";
import ProjectList from "./ProjectList";


class Projects extends Component
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

        const project = [
            {
                id:1,
                name:"Augmented Reality in a Large Agricultural Expo",
                detail: "Prototype platform using augmented reality to help facilitate knowledge exchange",

            },
            {
                id:2,
                name:"Augmented Reality in Tourism",
                detail: "Augmented reality prototype for tourism in remote locations",

            },
            {
                id:3,
                name:"Open Source Attack Graph Platform",
                detail: "An open source tool that performs automated penetration testing",

            },
            {
                id:4,
                name:"Peer Support System for Mental Wellness",
                detail: "Prototype system to help support individuals in mental wellness through peer support",

            },
            {
                id:5,
                name:"Quality Control Improvements for Automotive Manufacturing",
                detail: "Design and testing of machine learning technologies on assembly line",

            },
            {
                id:6,
                name:"Underground Beacon Positioning System",
                detail: "Prototype mesh network to allow accurate positioning in underground environments",

            },
            {
                id:7,
                name:"Veterinary Simulation Platform",
                detail: "Development of a prototype platform for canine simulation training",

            },
            {
                id:8,
                name:"Weed Identification Through Image Analysis",
                detail: "Development of a prototype platform for identifying weeds in a crop using AI",

            }
        ]

        const valueHol =project.map( (temp, i) => {
            return <ProjectList id={project[i].id} name={project[i].name} detail={project[i].detail}/>
        })


        return (
            <div id="Project" style={{minWidth:'1200px'}}>

                <h1 style={{color:"rebeccapurple",paddingTop:"70px",textAlign:"center", paddingBottom:"80px"}}>Projects</h1>
                {valueHol}

            </div>)
    }
}

export default Projects;