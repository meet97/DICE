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

            <div id="Home">
                <Header/>
                <div className="homepage">
                <HomeContent/>
                </div>
                <div className="mainPage">
                <Services/>
                </div>
                <div className="mainPag">
                <People/>
                </div>
                <div id="Foot">
                <Copyright/>
                </div>
            </div>

        )
    }

}

export default HomePage;