import React from "react";
import 'tachyons';

const PeopleList = (props) => {

    return (<div id='PeopleDiv' className="avatarLayout tc ma2 dib pa3" >
            <div id='lol'>
        <img src={`https://joeschmoe.io/api/v1/${props.name}`} alt="Avatar" />
        <div id='PeopleName'>
        <h2>{props.name}</h2>
        <p> {props.work}</p>
        </div>
            </div>
            <div className="Skill">
                <div className="text">More Information</div>
            </div>

    </div>
    )

};
export default PeopleList;
