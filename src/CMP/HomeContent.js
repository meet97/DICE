import React from 'react';
// import { Slide } from 'react-slideshow-image';


// const slideImages = [
//     '../img/home1.png',
//     '../img/home2.jpg',
//     '../img/home3.jpg'
// ];

// const properties = {
//     duration: 5000,
//     transitionDuration: 500,
//     infinite: true,
//     indicators: true,
//     arrows: true,
//     pauseOnHover: true,
//     onChange: (oldIndex, newIndex) => {
//         console.log(`slide transition from ${oldIndex} to ${newIndex}`);
//     }
// }

const homeContent = () => {
    return(




        <div className="HomePage">
            {/*<Slide {...properties}>*/}
            {/*    <div className="each-slide">*/}
            {/*        <div style={{'backgroundImage': `url(${slideImages[0]})`}}>*/}
            {/*            <span>Slide 1</span>*/}
            {/*        </div>*/}
            {/*    </div>*/}
            {/*    <div className="each-slide">*/}
            {/*        <div style={{'backgroundImage': `url(${slideImages[1]})`}}>*/}
            {/*            <span>Slide 2</span>*/}
            {/*        </div>*/}
            {/*    </div>*/}
            {/*    <div className="each-slide">*/}
            {/*        <div style={{'backgroundImage': `url(${slideImages[2]})`}}>*/}
            {/*            <span>Slide 3</span>*/}
            {/*        </div>*/}
            {/*    </div>*/}
            {/*</Slide>*/}

            <h1 style={{font:'Arial',position:'absolute', padding: '10px',top: '150px', left:'30%'}}> Digital Integration Centre of Excellence </h1>
            <div style={{position:'absolute',top:'200px',font:'Arial',alignment:'center',padding: '15%', margin: '50px',fontSize:'20px', zIndex:'999'}}>
            <p>

                                 Data stewardship is key to the services that DICE offers. DICE uses AI and ML techniques to
                                    obtain patterns that exist in the data. Those patterns become the information that provides
                                     insights to our industry partners.

                                     AI and ML are broad topics, so DICE has focused its work on three key areas:
                                  <ul className='HomeUl' style={{color:"black"}}>
                                               <li> asset management (AM)</li>
                                            <li>time sensitive networking (TSN)</li>
                                            <li>mesh networks (MN)</li>
                                        </ul>
                                 Techniques used to find patterns transcend sector-specific solutions – allowing, for
                             example, for strategies learned on automotive assembly lines to be applied to ore processing or
                             autonomous weeding. In each of these three areas, students in such fields as information
                             technology (IT), mining, geographic information systems (GIS), Electronic Systems Engineering
                             Technology ESET, and mechanical technology (MechTech) work with researchers as they
                             investigate possible solutions, gaining valuable experience in data management and acquiring
                                     advanced skill sets.


            </p>
                </div>
        </div>
    )
};

export default homeContent;