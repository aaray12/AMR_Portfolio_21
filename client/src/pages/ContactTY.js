import React from "react";
import NavBar from "../componets/NavBar"
import "./pagesCss/Contact.css"


function ContactTYPage() {
    return (
        <div id="aboutPages">
            {/* <NavBar /> */}
            <div id="aboutHomeLink" onClick = {()=> window.location.href = "/"}>
                <h5 id="aboutAR" >AR</h5>
            </div>
            <div id="aboutHeadings">
                {/* <h1 className="aboutHeading">Full-stack Developer.</h1>
                <h1 className="aboutHeading">Based in Chicago.</h1>
                <h1 className="aboutHeading">Building fully responsive websites.</h1> */}
                <h1 className="aboutHeading">Clear code.</h1>
                <h1 className="aboutHeading">Full-stack.</h1>
                <h1 className="aboutHeading">Cant lose.</h1>
            </div>

        </div>
    );
}


export default ContactTYPage;