import React from "react";
import Copyright from "../CMP/Footer";
import Projects from "../CMP/Projects";
import ResearcherHeader from "../CMP/ResearcherHeader";

export default function ResearcherHome() {
    return (
        <div>
            <div style={{height:'25%'}}>
                <ResearcherHeader/>
            </div>
            <div style={{height:'50%'}}>
                <Projects/>
            </div>
            <div style={{height:'25%'}}>
                <Copyright/>
            </div>
        </div>
    )
}
