import React from "react";
import NavBar from "../componets/NavBar"
import "./pagesCss/About.css"



function AboutPage() {
    return (
        <div id="aboutPages">
            {/* <NavBar /> */}
            <div id="aboutHomeLink" onClick = {()=> window.location.href = "/"}>
                <h5 id="aboutAR" >AR</h5>
            </div>
            <div id="aboutHeaders">
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
                <h5 id = "aboutTextDivOne">I'm Aaron, a talented problem solver with expereince developing full stack websites with JavaScript, NodeJS, React, Express, Bootstrap and Wordpress.</h5>
                <p>
                Solving tough problems and arriving at a successful solution is what drives me. I consider web development to be a team sport and I actively seek out collaboration and teamwork. Ultimately I am seeking a position that allows me to grow as a professional as a front-end web developer and work with others to achieve a common goal.
                </p>
                <p>I was born and raised in the north suburbs of Chicago. Graduated from Depaul University in 2019 with a major in communications concentrating on media production and a minor in film. Though I've stayed close to home in the city I love, I also have a passion for travel and exploring new places. This, in part, is what led me to study abroad at Monash University in Melbourne, Australia.</p>
                </div>
            </div>
            <div style ={{height: "33vh", }}></div>
        </div>
    );
}


export default AboutPage;