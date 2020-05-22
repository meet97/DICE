 import React from "react";
 import Header from "./Header";
 import Copyright from "./Footer";
 import HomeContent from "./HomeContent";



 class HomePage extends React.Component {


     render()
     {
         return (

                <div>
                    <Header/>

                    <HomeContent/>

                    <Copyright/>
                </div>

         )
     }

 }

 export default HomePage;