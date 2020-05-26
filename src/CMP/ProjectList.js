import React from "react";

const ProjectList = (props) => {

    return (
        <div className="avatarLayout tc dib pa3 " style={{ height:'250px',width:"45%", padding:"40px", backgroundColor:"mediumpurple"}} >
            <h3>{props.name}</h3>
            <div>
                <h5>Outcomes: </h5>
                <p>{props.detail}</p>
            </div>
        </div>
    )

}
export default ProjectList;