import React from "react";
import AdminHeader from "../CMP/AdminHeader";
import Copyright from "../CMP/Footer";
import Projects from "../CMP/Projects";

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
