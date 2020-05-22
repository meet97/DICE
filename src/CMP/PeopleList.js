import React from "react";
import 'tachyons';

const PeopleList = (props) => {

    return (<div className="avatarLayout tc ma2 dib pa3" style={{width: "32%" , height: "32%"}} >
        <img src={`https://joeschmoe.io/api/v1/${props.name}`} alt="Avatar" />
        <h2>{props.name}</h2>
        <p> {props.work}</p>
    </div>)

};
export default PeopleList;
