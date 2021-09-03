import React from "react";
import NavBar from "../componets/NavBar"
import "./pagesCss/Contact.css"


function ContactTYPage() {
   function  okRedirect(){
       window.location.href = "/"
   }
    return (
        <div id="tyPages">
            {/* <NavBar /> */}
            <div id="aboutHomeLink" onClick = {()=> window.location.href = "/"}>
                <h5 id="aboutAR" >AR</h5>
            </div>
            <div style = {{color: "white", textAlign: "center", marginTop: "12%"}}>
                <h1>Thank You!</h1>
                <h3>Your message has been sent, <br></br> I will get back to you as soon as I can.</h3>
                <button onClick={okRedirect} id = "okBtn">Ok!</button>
            </div>
        </div>
    );
}


export default ContactTYPage;