import React from "react";

const ProjectList = (props) => {

    return (
        <div className="avatarLayout tc dib pa3 " style={{ height:'250px',width:"32%", padding:"20px"}} >
            <div style={{ height:'75px',width:"100%", padding:"20px"}}>
            <h3>{props.name}</h3>
            </div>
    <div style={{ height:'175px',width:"100%", padding:"20px"}}>
        <h5>Outcomes: </h5>
        <p>{props.detail}</p>
    </div>
        </div>
    )

}
export default ProjectList;