import React from "react";
import Header from "./Header";
import Copyright from "./Footer";
import HomeContent from "./HomeContent";
import Services from "./Services";
import People from "./People";
import '../App.css';



class HomePage extends React.Component {


    render()
    {
        return (

            <div id="Home">
                <HomeContent/>

                <Header/>

            </div>

        )
    }

}

export default HomePage;