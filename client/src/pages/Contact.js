import React from "react";
import NavBar from "../componets/NavBar"
import { Form } from 'react-bootstrap';

import "./pagesCss/Contact.css"


function ContactPage() {
    return (
        <div id="aboutPages">
            {/* <NavBar /> */}
            <div id="aboutHomeLink" onClick={() => window.location.href = "/"}>
                <h5 id="aboutAR" >AR</h5>
            </div>

            <h1 style={{ textAlign: "center", color: "white", fontWeight: "800", margin: "1em", marginTop: "2em" }}>Contact</h1>

            <div style={{ color: "white", width: "60%", textAlign: "center", margin: "auto" }}>
                <form action="https://formsubmit.co/aaray619@gmail.com" method="POST">
                    <div style={{ display: "inline-block", width: "100%", textAlign: "center" }}>
                        <div style={{ display: "inline-block", textAlign: "left", margin: "2em" }}>
                            <h5>Your Email: </h5>
                            <input type="email" name="email" placeholder="johnsmith@email.com" required />
                        </div>
                        <div style={{ display: "inline-block", textAlign: "left", margin: "2em" }}>
                            <h5>Name: </h5>
                            <input type="text" name="name" placeholder="John Smith" required />
                        </div>
                        <div style={{ display: "inline-block", textAlign: "left", margin: "2em" }}>
                            <h5>Subject: </h5>
                            <input type="text" name="_subject" placeholder="Let's Connect" required />
                        </div>
                    </div>
                    <div>
                        <h5 style={{ textAlign: "left" }}>Message:</h5>
                        <textarea type="text" style={{ width: "100%", height: "10em", marginBottom: "2em" }} name="message" required id="emailMessage" />
                    </div>

                    <input type="hidden" name="_captcha" value="false" />
                    <input type="hidden" name="_next" value="https://amr-portfolio-21.herokuapp.com/sent" />
                    <div>
                        <button type="submit" id="sendBtn">Send</button>
                    </div>
                    <div id="iconDiv" style={{ display: "inline-block" }}>
                        <img src="./images/githubIcon.png" className="smIcons"></img>
                        <img src="./images/linkdenIcon.png" className="smIcons"></img>
                    </div>
                    <div style={{ display: "inline-block", width: "66%", color: "grey", margin: "1em"}}>
                        <p>aaray619@gmail.com <span style = {{fontSize: "larger"}}>||</span> (847) 999-8591 </p>
                    </div>
                </form>
            </div>
        </div>
    );
}


export default ContactPage;