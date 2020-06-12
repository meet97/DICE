import React from 'react';
import {SocialMediaIconsReact} from 'social-media-icons-react';


export default function Copyright() {
    return (
        <div id='Contact' style={{backgroundColor:'black'}}>
            <table id='cont'>
                <tr style={{width:'55%',color:'White', weight:'15px'}}>
                    <td><h2>Office</h2></td>
                    <td><h2>Useful Links</h2></td>
                </tr>
                <tr style={{width:'100%',color:'White'}}>
                    <td>
                        Room 304.10<br/>
                        Saskatchewan Polytechnic<br/> Saskatoon Campus, Idylwyld Dr.<br/>
                        <a href={"tel:306-659-4107"}>Call us (306-659-4107)</a>
                    </td>
                    <td>
                        <a href={"https://saskpolytech.ca/about/applied-research-and-innovation/dice/administration.aspx"}> Administration </a> <br/>
                        <a href={"https://saskpolytech.ca/about/applied-research-and-innovation/dice/workshops.aspx"}> Workshop </a> <br/>
                        <a href={"https://saskpolytech.ca/about/applied-research-and-innovation/index.aspx"}> Applied Research </a> <br/>
                    </td>
                    <td id='Social'>
                        <td id={"icons"}><SocialMediaIconsReact className={"socialMedia"} iconSize={10} backgroundColor={"grey"} iconColor={"white"} icon="mail" url="mailto:peckhamt@saskpolytech.ca"/></td>
                        <td id={"icons"}><SocialMediaIconsReact iconSize={5} backgroundColor={"grey"} iconColor={"white"} icon="facebook" url="https://www.facebook.com/saskpolytech"/></td>
                        <td id={"icons"}><SocialMediaIconsReact iconSize={5} backgroundColor={"grey"} iconColor={"white"} icon="instagram" url="http://instagram.com/SaskPolytech"/></td>
                        <td id={"icons"}><SocialMediaIconsReact iconSize={5} backgroundColor={"grey"} iconColor={"white"} icon="twitter" url="http://www.twitter.com/saskpolytech"/></td>
                        <td id={"icons"}><SocialMediaIconsReact iconSize={5} backgroundColor={"grey"} iconColor={"white"} icon="linkedin" url="https://ca.linkedin.com/school/saskpolytech/"/></td>
                        <td id={"icons"}><SocialMediaIconsReact iconSize={5} backgroundColor={"grey"} iconColor={"white"} icon="youtube" url="https://www.youtube.com/user/saskpolytech"/></td>
                    </td>
                </tr>
            </table>
        </div>
    );
}