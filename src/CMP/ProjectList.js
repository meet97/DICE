import React from "react";

const ProjectList = (props) => {

    return (
        <div id='ProjectDiv' className="avatarLayout tc dib pa3 "  >
            <div id='ProjectName'>
            <h3>{props.name}</h3>
            </div>
    <div id='ProjectDesc'>
        <h5>Outcomes: </h5>
        <p>{props.detail}</p>
    </div>
        </div>
    )

}
export default ProjectList;