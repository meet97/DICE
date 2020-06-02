import React from "react";
import AdminHeader from "./AdminHeader";
import Copyright from "./Footer";
import Projects from "./Projects";

export default function AdminHome() {
    return (
        <div>
            <div style={{height:'25%'}}>
                <AdminHeader/>
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
