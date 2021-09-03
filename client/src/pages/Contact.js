import React from "react";
import NavBar from "../componets/NavBar"
import "./pagesCss/Contact.css"


function ContactPage() {
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
                {/* <h1 className="aboutHeading">Clear code.</h1>
                <h1 className="aboutHeading">Full-stack.</h1>
                <h1 className="aboutHeading">Cant lose.</h1> */}
            </div>
           <div>
           <form action="https://formsubmit.co/aaray619@gmail.com" method="POST">
        <input type="email" name="email" placeholder="Email Address" required/>
     <input type="text" name="name" required/>
     <input type="text" name="message" required/>
     <input type="hidden" name="_captcha" value="false"/>
     <input type="hidden" name="_next" value="https://amr-portfolio-21.herokuapp.com/sent"/>


     <button type="submit">Send</button>
            </form>
           </div>
        </div>
    );
}


export default ContactPage;