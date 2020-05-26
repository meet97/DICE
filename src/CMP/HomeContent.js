import React from 'react';
import home1 from "../img/home1.png";
import home2 from "../img/home2.jpg";
import home3 from "../img/home3.jpg";
import asset from "../img/asset.jpg";
import tsn from "../img/tsn.png";
import { Slide } from 'react-slideshow-image';


import './Demo.css';

const slideImages = [
    home1,
    home2,
    home3
];

const properties = {
    duration: 5000,
    transitionDuration: 500,
    infinite: true,
    indicators: true,
    arrows: true,
    pauseOnHover: false,
    onChange: (oldIndex, newIndex) => {
        console.log(`slide transition from ${oldIndex} to ${newIndex}`);
    }
}

const homeContent = () => {
    return(

        <div className="HomePage" style={{height:"100%",minWidth:'1200px'}}>

            <div className="slide-container">

                <Slide {...properties}>
                    <div className="each-slide">
                        <div style={{'backgroundImage': `url(${slideImages[0]})`}}>

                        </div>
                    </div>
                    <div className="each-slide">
                        <div style={{'backgroundImage': `url(${slideImages[1]})`}}>

                        </div>
                    </div>
                    <div className="each-slide">
                        <div style={{'backgroundImage': `url(${slideImages[2]})`}}>

                        </div>
                    </div>
                </Slide>
            </div>
            <div className='heading' id="About">
                <h1 style={{color:"rebeccapurple",paddingTop:"50px",textAlign:"center", paddingBottom:"50px"}}> Digital Integration Centre of Excellence </h1>
            </div>
            <div className='content' style={{position:'relative',
                float:'left',
                fontFamily:'Arial',
                alignment:'center',
                paddingLeft: '12%',
                paddingRight:'12%',
                fontSize:'20px',
                display:'block'}}>
                <p>

                    Data stewardship is key to the services that DICE offers. DICE uses AI and ML techniques to
                    obtain patterns that exist in the data. Those patterns become the information that provides
                    insights to our industry partners.

                    AI and ML are broad topics, so DICE has focused its work on three key areas:
                    <div className='keyarea' style={{paddingTop:'50px', minWidth:'100%'}}>
                        <div className='key'>
                            <img src={asset} alt="Logo" className='image' style={{height:'200px'}}/>
                            <div className="middle">
                                <div className="text">More Information</div>
                            </div>
                        </div>
                        <div className='key'>
                            <img src={tsn} alt="Logo" className='image' style={{height:'200px'}}/>
                            <div className="middle">
                                <div className="text">More Information</div>
                            </div>
                        </div>
                        <div className='key'>
                            <img src={asset} alt={"asset Pic"} className='image' style={{height:'200px'}}/>
                            <div className="middle">
                                <div className="text">More Information</div>
                            </div>
                        </div>
                    </div>
                    {/*<ul className='HomeUl' style={{color:"black"}}>*/}
                    {/*    <li><strong>Asset Management – </strong> Aging assets and the impending retirement of many experienced*/}
                    {/*        professionals are among the issues facing many companies today. In addition, unexpected*/}
                    {/*        downtime costs industries billions of dollars each year. Businesses are increasingly looking to*/}
                    {/*        advanced AI and ML strategies and to the IoT for solutions to such problems. DICE researchers*/}
                    {/*        apply condition monitoring and predictive maintenance to IoT technologies embedded in heavy*/}
                    {/*        assets by combining data acquisition, analytics, edge computing, mobile computing, cyber*/}
                    {/*        security, and software technology platforms. Their solutions allow businesses to make better*/}
                    {/*        decisions relating to the ongoing operation and maintenance of assets.</li>*/}

                    {/*    <li><strong>Time Sensitive Networking (TSN) - </strong> is key for industrial applications, such as process and machine*/}
                    {/*        control. Researchers apply AI and ML techniques within time-sensitive contexts, ensuring that*/}
                    {/*        data can be acted upon immediately when required.</li>*/}

                    {/*    <li><strong>Mesh Networks (MN) – </strong>“Mesh” is the rich interconnection among smart devices or nodes consisting*/}
                    {/*        of mesh clients, mesh routers and gateways in a relatively stable topology. DICE researchers*/}
                    {/*        focus on open technologies that can help monitor and control mesh networks at the cloud edge,*/}
                    {/*        while maintaining security, scalability, and interoperability between different vendors and*/}
                    {/*        protocol standards. Their work allows companies to increase resiliency and ease integration of*/}
                    {/*        distributed resources. Rural connectivity projects, such as one being developed with Sasktel that*/}
                    {/*        aims to create virtual cattle fences to aid in rotational grazing, require the creation of networks in*/}
                    {/*        isolated areas at low cost. Developing such applications requires computer-based skills, a robust*/}
                    {/*        network, and faculty/students from our veterinary technology program to help perform the*/}
                    {/*        validation testing with livestock.</li>*/}
                    {/*</ul>*/}
                    {/*Techniques used to find patterns transcend sector-specific solutions – allowing, for*/}
                    {/*example, for strategies learned on automotive assembly lines to be applied to ore processing or*/}
                    {/*autonomous weeding. In each of these three areas, students in such fields as information*/}
                    {/*technology (IT), mining, geographic information systems (GIS), Electronic Systems Engineering*/}
                    {/*Technology ESET, and mechanical technology (MechTech) work with researchers as they*/}
                    {/*investigate possible solutions, gaining valuable experience in data management and acquiring*/}
                    {/*advanced skill sets.*/}


                </p>

            </div>
        </div>
    )
};

export default homeContent;