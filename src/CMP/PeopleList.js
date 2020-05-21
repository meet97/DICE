import React from "react";
import 'tachyons';

const PeopleList = (props) => {

    return (<div className="avatarLayout tc ma4 dib pa3" style={{width: "25%" , height: "15%"}} >
        <img src={`https://joeschmoe.io/api/v1/${props.name}`} alt="Avatar" />
        <h1>{props.name}</h1>
        <p> {props.work}</p>
    </div>)

};
export default PeopleList;
