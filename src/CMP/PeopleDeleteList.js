import React,{useState} from "react";
import 'tachyons';
import './Demo.css';

const PeopleDeleteList = (props) => {
    return (<div id='PeopleDiv' className="avatarLayout tc ma2 dib pa3 grow" >
            <div id='lol'>
                <img src={`https://joeschmoe.io/api/v1/${props.name}`} alt="Avatar" />
                <div id='PeopleName'>
                    <h2>{props.name}</h2>
                    <p> {props.work}</p>
                </div>
            </div>
            <div className="Skill">
                <div className="text"><a href={`/delete?email=${props.email}`}>Delete</a></div>
            </div>

        </div>
    )

};
export default PeopleDeleteList;
