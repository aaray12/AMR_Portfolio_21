import React from "react";
import NavBar from "../componets/NavBar"
import "./pagesCss/About.css"



function AboutPage() {
    return (
        <div id="aboutPage">
            {/* <NavBar /> */}
            <div id="aboutHomeLink" onClick = {()=> window.location.href = "/"}>
                <h5 id="aboutAR" >AR</h5>
            </div>
            <div id="aboutHeadings">
                <h1 className="aboutHeading">Full-stack Developer.</h1>
                <h1 className="aboutHeading">Based in Chicago.</h1>
                <h1 className="aboutHeading">Building fully responsive websites.</h1>
                {/* <h1 className="aboutHeading">Clear code.</h1>
                <h1 className="aboutHeading">Full-stack.</h1>
                <h1 className="aboutHeading">Cant lose.</h1> */}
            </div>
            <div id="aboutImageDiv">
                <img src="./images/aaron_1906.png" id="aboutImage"></img>
            </div>
            <div id="aboutText">
                <h1 id = "aboutHead">About</h1>
                <div id ="aboutTextDiv">
                <h5 id = "aboutTextDivOne">I'm Aaron, a talented problem solver with expereince developing websites with JavaScript, NodeJS, React, Express, Bootstrap and Wordpress.</h5>
                <p>
                Solving tough problems and arriving at a successful solution is what drives me. As a full stack developer I’m able to achieve this through my work in JavaScript, NodeJS, React and Bootstrap.
I consider web development to be a team sport and I actively seek out collaboration and teamwork.
Ultimately I am seeking a position that allows me to grow as a professional as a front-end web developer and work with others to achieve a common goal.
                </p>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                </div>
            </div>
        </div>
    );
}


export default AboutPage;