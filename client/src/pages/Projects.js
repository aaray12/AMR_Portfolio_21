import React from "react";
import { Col, Row, Container, Button } from 'react-bootstrap';

import NavBar from "../componets/NavBar"
import "./pagesCss/Projects.css"

function ProjectsPage() {
    return (
        <div id="aboutPage">
            {/* <NavBar /> */}
            <div id="aboutHomeLink" onClick={() => window.location.href = "/"}>
                <h5 id="aboutAR" >AR</h5>
            </div>
            <div id="aboutHeadings">
                {/* <h1 className="aboutHeading">Clear code.</h1>
                <h1 className="aboutHeading">Full-stack.</h1> */}
                <h1 className="projectsHeading">Portfolio</h1>
            </div>
            <div className="projectRightDiv">
                <div id="imageDiv">
                    <img src="./images/travel wizard_mac.png" id="macImage"></img>

                    <img src="./images/travel wizaed_phone.png" id="iphoneImage"></img>
                </div>
                <div className="projectInfo">
                    <h5 className="projTextHead">Traveling Pocket Wizard </h5>
                    <p className="projText">A MERN stack web app developed to be a Covid-19 consious way to start exploring travele again. We used multiple API's to pull usefull travel information into one location. Look up flights, hotels, attractions and the latest Covid-19 statics for your destination. Register a new account, log in and start keeping track of all your new travel plans.</p>
                </div>
                <div className="projectLinks">
                    <a className="ghLink" href = "https://github.com/aaray12/traveling-website" target="_blank">GitHub</a>
                    <a className="webLink" href = "https://travel-pocket-wizard.herokuapp.com/" target = "_blank">Website</a>
                </div>
            </div>
            <div className="projectLeftDiv">
                <div className="projectInfo">
                    <h5 className="projTextHead">Music Rater</h5>
                    <p className="projText">Music Rater is an application that allows users to search for information about a song, artist, or album. The user can 'Like' a song, artist, or album, and that song, artitst, or album will be added to the corresponding Top Songs/Top Artists/Top Albums chart. The user can access the Top Songs, Top Artists, and Top Albums charts to see the most popular songs, artists, and albums for all our users.</p>
                </div>
                <div className="imageDivLeft">
                    <img src="./images/music rater_mac copy.png" className="macImageLeft"></img>

                    <img src="./images/music rater_phone.png" className="iphoneImageLeft"></img>
                </div>
                <div className="projectLinks">
                    <a className="ghLink" href = "https://github.com/aaray12/Music-Rater" target="_blank">GitHub</a>
                    <a className="webLink" href = "https://music-rater.herokuapp.com/" target="_blank">Website</a>
                </div>
            </div>
            <div className="projectRightDiv">
                <div id="imageDiv">
                    <img src="./images/brandingportal_mac.png" id="macImage"></img>

                    <img src="./images/BRANDING PORTAL_PHONE.png" id="iphoneImage"></img>
                </div>
                <div className="projectInfo">
                    <h5 className="projTextHead">Branding Portal</h5>
                    <p className="projText">A MERN stack web app developed to help marketing agencies keep track of different brands. The app contains an admin and a user dashboard. Only admins may register new users, create and edit brands, as well as asign brand access to other users. A non admin user is only able to view brands that an admin has shared with them.</p>
                </div>
                <div className="projectLinks">
                    {/* <p className="ghLink">Github</p> */}
                    <a className="webLink" href = "https://convergenx-portal.herokuapp.com/" target ="_blank">Website</a>
                </div>
            </div>
            <div className="projectLeftDiv">
                <div className="projectInfo">
                    <h5 className="projTextHead">BioVie</h5>
                    <p className="projText">A multi-page website built with Wordpress. Utilized multiple pluggins to create a fully resposnsive site that keeps up to date with the latest press releases and stock information for BioVie.  </p>
                </div>
                <div className="imageDivLeft">
                    <img src="./images/biovie_mac.png" className="macImageLeft"></img>

                    <img src="./images/biovie_phone.png" className="iphoneImageLeft"></img>
                </div>
                <div className="projectLinks">
                    {/* <p className="ghLink">Github</p> */}
                    <a className="webLink" href = "https://www.bioviepharma.com/" target = "_blank">Website</a>
                </div>
            </div>
        </div>
    );
}


export default ProjectsPage;