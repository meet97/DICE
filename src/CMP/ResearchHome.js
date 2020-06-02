import React from "react";
import Copyright from "./Footer";
import Projects from "./Projects";
import ResearcherHeader from "./ResearcherHeader";

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
