import React, {Component} from "react";
import './Demo.css';
import 'tachyons';
import Copyright from "./Footer";
import Header from "./Header";
import PeopleList from "./PeopleList";

class People extends Component
{
    render() {
        const peopleList = [
            {
                id:1,
                name: "Dr. Terry Peckham",
                work: "TAC Director and Research Chair"
            },
            {
                id: 2,
                name: "Dr. Cyril Coupal",
                work: "Digital Integration Manager"
            },
            {
                id: 3,
                name: "Kelvin Boechler",
                work: "Project Manager"
            },
            {
                id: 4,
                name: "Derrick Danyluk",
                work: "Instructor"
            },
            {
                id: 5,
                name: "Collen Patterson",
                work: "Senior Research Associate"
            },
            {
                id: 6,
                name: "Dr. Richard Dosselmann",
                work: "Senior Research Associate"
            },
            {
                id: 7,
                name: "Tanny Lung",
                work: "Senior Research Associate"
            },
            {
                id: 8,
                name: "William Topping",
                work: "Senior Research Associate"
            },
            {
                id: 9,
                name: "Wade Lahoda",
                work: "Senior Research Associate"
            },
            {
                id: 10,
                name: "Mathew Thompson",
                work: "Research Technician"
            },
            {
                id: 11,
                name: "Luke MacNeil",
                work: "Research Technician"
            },
            {
                id: 12,
                name: "Brian Dyck",
                work: "Research Technician"
            },
            {
                id: 13,
                name: "Tessa Herzberger",
                work: "Research Technician"
            },
            {
                id: 14,
                name: "Shahrzad Najafabadi",
                work: "Research Technician"
            }
        ];
        const peopleHolher = peopleList.map( (temp, i) => {
            return <PeopleList key={i} id={peopleList[i].id} name={peopleList[i].name} work={peopleList[i].work}/>
        });
        return(
            <div className={"mainPage"}>
                <Header/>
                <div>
                    <h1>Our Team</h1>
                    {peopleHolher}
                </div>
                <Copyright/>
            </div>
        )
    }
}

export default People;