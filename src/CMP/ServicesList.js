import React, {Component} from "react";


const ServiceList = (props) => {

    return (
            <div className="avatarLayout tc ma2 dib pa3 " style={{Display:"inline", width:"32%"}} >
            <h3>{props.name}</h3>
            </div>
        )

}
export default ServiceList;