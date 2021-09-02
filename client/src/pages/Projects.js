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
                <h1 className="aboutHeading">Clear code.</h1>
                <h1 className="aboutHeading">Full-stack.</h1>
                <h1 className="aboutHeading">Cant lose.</h1>
            </div>
            <div className="projectRightDiv">
                <div id="imageDiv">
                    <img src="./images/mac.png" id="macImage"></img>

                    <img src="./images/iphone.png" id="iphoneImage"></img>
                </div>
                <div className="projectInfo">
                    <h5 className="projTextHead">Project #</h5>
                    <p className="projText">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
                    nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                </div>
                <div className="projectLinks">
                    <h3 className="ghLink">Github</h3>
                    <h3 className="webLink">Website</h3>
                </div>
            </div>
            <div className="projectLeftDiv">
                <div className="projectInfo">
                    <h5 className="projTextHead">Project #</h5>
                    <p className="projText">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
                    nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                </div>
                <div className="imageDivLeft">
                    <img src="./images/mac.png" className="macImageLeft"></img>

                    <img src="./images/iphone.png" className="iphoneImageLeft"></img>
                </div>
                <div className="projectLinks">
                    <h3 className="ghLink">Github</h3>
                    <h3 className="webLink">Website</h3>
                </div>
            </div>
            <div className="projectRightDiv">
                <div id="imageDiv">
                    <img src="./images/mac.png" id="macImage"></img>

                    <img src="./images/iphone.png" id="iphoneImage"></img>
                </div>
                <div className="projectInfo">
                    <h5 className="projTextHead">Project #</h5>
                    <p className="projText">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
                    nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                </div>
                <div className="projectLinks">
                    <h3 className="ghLink">Github</h3>
                    <h3 className="webLink">Website</h3>
                </div>
            </div>
            <div className="projectLeftDiv">
                <div className="projectInfo">
                    <h5 className="projTextHead">Project #</h5>
                    <p className="projText">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
                    nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                </div>
                <div className="imageDivLeft">
                    <img src="./images/mac.png" className="macImageLeft"></img>

                    <img src="./images/iphone.png" className="iphoneImageLeft"></img>
                </div>
                <div className="projectLinks">
                    <h3 className="ghLink">Github</h3>
                    <h3 className="webLink">Website</h3>
                </div>
            </div>
        </div>
    );
}


export default ProjectsPage;