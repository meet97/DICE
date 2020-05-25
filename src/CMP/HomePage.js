import React from "react";
import Header from "./Header";
import HomeContent from "./HomeContent";
import '../App.css';
import Services from "./Services";
import People from "./People";
import Copyright from "./Footer";



class HomePage extends React.Component {


    render()
    {
        return (

            <div id="Home" >
                <div className="homepage">
                <HomeContent/>
                </div>
                <div className="mainPage" style={{float: "right"}}>
                <Services/>
                </div>
                <div className="mainPag" style={{float: "right"}}>
                <People/>
                </div>
                <Header/>
                <div id="Foot" style={{float: "right"}}>
                <Copyright/>
                </div>
            </div>

        )
    }

}

export default HomePage;