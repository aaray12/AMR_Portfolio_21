import React from "react";
import { Col, Row, Container, Button } from 'react-bootstrap';
import {
    hinge, bounceInRight, zoomOutDown, zoomIn, zoomInUp, zoomOut, fadeOut,
    fadeInLeft, fadeInDown, fadeInUp, fadeIn, flipInX, headShake, pulse, tada
} from 'react-animations';
import { StyleSheet, css } from 'aphrodite';
import "./pagesCss/Landing.css"

const me2 = "Portfolio/me2_wpbume"
const me1 = "Portfolio/me1_tzhqqx"
const chiLandscape = "../images/chiSkyline.png"


function LandingPage() {
    const styles = StyleSheet.create({
        hinge: {
            animationName: hinge,
            animationDuration: '2s'
        },
        headShake: {
            animationName: headShake,
            animationDuration: '1s'
        },
        tada: {
            animationName: tada,
            animationDuration: '1s'
        },
        bounceInRight: {
            animationName: bounceInRight,
            animationDuration: '1.5s'
        },
        pulse: {
            animationName: pulse,
            animationDuration: '1s'
        },
        zoomOutDown: {
            animationName: zoomOutDown,
            animationDuration: '1s'
        },
        zoomIn: {
            animationName: zoomIn,
            animationDuration: '1s'
        },
        zoomOut: {
            animationName: zoomOut,
            animationDuration: '.75s'
        },
        zoomInUp: {
            animationName: zoomInUp,
            animationDuration: '3.33s'
        },
        fadeOut: {
            animationName: fadeOut,
            animationDuration: '1s'
        },
        fadeInLeft: {
            animationName: fadeInLeft,
            animationDuration: '1s'
        },
        fadeInDown: {
            animationName: fadeInDown,
            animationDuration: '1s'
        },
        fadeIn: {
            animationName: fadeIn,
            animationDuration: '1s'
        },
        fadeInUp: {
            animationName: fadeInUp,
            animationDuration: '1s'
        },

        flipInX: {
            animationName: flipInX,
            animationDuration: '2.25s'
        }
    })
    function MockBrowserClose(e) {
        e.preventDefault();
        document.getElementById("lpMockBrowser").style.display = "none"
        function showSkyline() {
            document.getElementById("lpChiSkyline").style.visibility = "visible"
            document.getElementById("lpChiSkyline").classList.add(css(styles.fadeIn))

        }
        setTimeout(showSkyline, 1250);
    }
    function MockBrowserMinimize(e) {
        e.preventDefault();
        document.getElementById("lpMockBrowser").classList.remove(css(styles.fadeInUp))
        document.getElementById("lpMockBrowser").classList.add(css(styles.zoomOutDown))
        function WaitToClose() {
            document.getElementById("lpMockBrowser").style.display = "none"
            document.getElementById("miniBrowser").style.visibility = "visible"
            document.getElementById("miniBrowser").classList.remove(css(styles.zoomOutDown))
            document.getElementById("miniBrowser").classList.add(css(styles.fadeInUp))
        }
        function showSkyline() {
            document.getElementById("lpChiSkyline").style.visibility = "visible"
            document.getElementById("lpChiSkyline").classList.remove(css(styles.fadeOut))
            document.getElementById("lpChiSkyline").classList.add(css(styles.fadeIn))
            document.getElementById("lpBrowserLinks2").style.visibility = "visible"
            document.getElementById("lpBrowserLinks2").classList.remove(css(styles.fadeOut))
            document.getElementById("lpBrowserLinks2").classList.add(css(styles.fadeIn))
            document.getElementById("lpChiBorder").style.visibility = "visible"
            document.getElementById("lpChiBorder").classList.remove(css(styles.fadeOut))
            document.getElementById("lpChiBorder").classList.add(css(styles.fadeIn))
        }
        setTimeout(WaitToClose, 1000);
        setTimeout(showSkyline, 2000);
    }
    function MockBrowserReverseMinimize(){
        document.getElementById("miniBrowser").classList.remove(css(styles.fadeInUp))
        document.getElementById("miniBrowser").classList.add(css(styles.zoomOutDown))
        function expandBrowser(){
            document.getElementById("miniBrowser").style.visibility = "hidden"
            document.getElementById("lpMockBrowser").style.display = "inline-block"
            document.getElementById("lpMockBrowser").classList.remove(css(styles.zoomOutDown))
            document.getElementById("lpMockBrowser").classList.add(css(styles.fadeInUp))
            document.getElementById("lpBrowserLinks2").classList.remove(css(styles.fadeIn))
            document.getElementById("lpBrowserLinks2").classList.add(css(styles.fadeOut))
            document.getElementById("lpChiBorder").classList.remove(css(styles.fadeOut))
            document.getElementById("lpChiBorder").classList.add(css(styles.fadeOut))
            document.getElementById("lpChiSkyline").classList.remove(css(styles.fadeIn))
            document.getElementById("lpChiSkyline").classList.add(css(styles.fadeOut))
            setTimeout(()=>{ document.getElementById("lpBrowserLinks2").style.visibility = "hidden";document.getElementById("lpChiBorder").style.visibility = "hidden";document.getElementById("lpChiSkyline").style.visibility = "hidden"}, 1000);
        }
        setTimeout(expandBrowser, 1000);
    }
var clicked = false
    function MockBrowserExpand(e) {
        e.preventDefault();
        if(clicked == false){
        clicked = true;
        if(window.innerWidth <=777){
            document.getElementById("lpMockBrowser").style.width = "100%"
            document.getElementById("lpMockBrowser").style.top = "-17.5em"
            document.getElementById("lpMockBrowser").style.right = "25%"
            document.getElementById("lpMockBrowser").style.height = "100vh"
            document.getElementById("miniBrowserDiv").style.height = "0em"
            document.getElementById("me1").style.width = "40vh"
            document.getElementById("lpContactBtn").style.fontSize = "200%"

            document.getElementById("lpBlogBtn").style.fontSize = "200%"
            document.getElementById("lpProjectsBtn").style.fontSize = "200%"
            document.getElementById("lpAboutBtn").style.fontSize = "200%"
        }
        else{
        document.getElementById("lpMockBrowser").style.width = "247.5%"
        document.getElementById("lpMockBrowser").style.height = "100vh"
        document.getElementById("lpMockBrowser").style.marginTop = "0em"
        document.getElementById("lpMockBrowser").style.right = "146%"
        document.getElementById("miniBrowserDiv").style.height = "0em"
        document.getElementById("lpMeImgDiv").style.marginTop = "5%"
        document.getElementById("me1").style.width = "40vh"
        document.getElementById("lpContactBtn").style.fontSize = "200%"
        document.getElementById("lpBlogBtn").style.fontSize = "200%"
        document.getElementById("lpProjectsBtn").style.fontSize = "200%"
        document.getElementById("lpAboutBtn").style.fontSize = "200%"
        }
    }
        else if (clicked == true){
            clicked = false
            document.getElementById("lpMockBrowser").style.width = null
            document.getElementById("lpMockBrowser").style.height = null
            document.getElementById("lpMockBrowser").style.marginTop = null
            document.getElementById("lpMockBrowser").style.right = null
            document.getElementById("miniBrowserDiv").style.height = null
            document.getElementById("lpMeImgDiv").style.marginTop = null
            document.getElementById("me1").style.width = null
            document.getElementById("lpContactBtn").style.fontSize = null
            document.getElementById("lpBlogBtn").style.fontSize = null
            document.getElementById("lpProjectsBtn").style.fontSize = null
            document.getElementById("lpAboutBtn").style.fontSize = null
            document.getElementById("lpMockBrowser").style.top = null


        }
        

        console.log(window.innerWidth)
    }
    function showMe1() {
        const myImage = document.getElementById("me1")
        myImage.style.visibility = "visible"
        myImage.style.marginTop = "10vh"
        myImage.classList.add(css(styles.flipInX))
        myImage.addEventListener('mouseover', function () {
            myImage.src = "../images/me2.png"
        })
        myImage.addEventListener('mouseout', function () {
            myImage.src = "../images/me1.png"
        })
    }
    function showAboutBtn() {
        document.getElementById('lpAboutBtn').style.visibility = "visible"
        document.getElementById('lpAboutBtn').classList.add(css(styles.zoomInUp))
    }
    function showProjectsBtn() {
        document.getElementById('lpProjectsBtn').style.visibility = "visible"
        document.getElementById('lpProjectsBtn').classList.add(css(styles.zoomInUp))
    }
    function showContactBtn() {
        document.getElementById('lpContactBtn').style.visibility = "visible"
        document.getElementById('lpContactBtn').classList.add(css(styles.zoomInUp))
    }
    function showBlogBtn() {
        document.getElementById('lpBlogBtn').style.visibility = "visible"
        document.getElementById('lpBlogBtn').classList.add(css(styles.zoomInUp))
    }
    function Reload() {
        window.location.reload()
    }
    function toAbout(){
        document.location.href = "/about"
    }
    function toBlog(){
        document.location.href = "/blog"
    }
    function toContact(){
        document.location.href = "/contact"
    }
    function toProjects(){
        document.location.href = "/projects"
    }
    setTimeout(() => { document.getElementById("lpMockBrowser").style.backgroundColor = "#14213d" }, 1250);
    setTimeout(showMe1, 2500);
    setTimeout(() => { document.getElementById("lpBrowsrerBackground").style.opacity = "100%" }, 2500);
    setTimeout(() => { document.getElementById("lpBrowsrerBackground").style.opacity = "100%" }, 2500);
    setTimeout(showAboutBtn, 2000);
    setTimeout(showProjectsBtn, 2250);
    setTimeout(showBlogBtn, 2500);
    setTimeout(showContactBtn, 2750);

    function heyShake() {
        document.getElementById('lpHey').classList.add(css(styles.headShake))
    }
    function heyShakeOut() {
        document.getElementById('lpHey').classList.remove(css(styles.headShake))
    }
    function imAaBounce() {
        document.getElementById('lpImAaron').classList.add(css(styles.pulse))
    }
    function imAaBounceOut() {
        document.getElementById('lpImAaron').classList.remove(css(styles.pulse))
    }
    function fsdZooms() {
        document.getElementById('aFSDeveloper').classList.add(css(styles.tada))


    }
    function fsdZoomsOut() {
        document.getElementById('aFSDeveloper').classList.remove(css(styles.tada))
    }
    return (
        //heroku test automatic deploy
        <div >
            <Row id="lpRow">

                <Col id="lpRightCol" md={7}>
                    <div id="lpHomeLink" className={css(styles.fadeInDown)} onClick={Reload}>
                        <h5 id="lpAR" >AR</h5>
                    </div>
                    <div id="lpTextDiv" className={css(styles.fadeInLeft)}>
                        <h2 className="lpLeftHeadings">
                            <div id="lpHey" onMouseOver={heyShake} onMouseOut={heyShakeOut} ><span id="hInHey">H</span>ey,</div>
                        </h2>
                        <h2 className="lpLeftHeadings">
                            <div id="lpImAaron" onMouseOver={imAaBounce} onMouseOut={imAaBounceOut}>I'm Aaron,</div>
                        </h2>
                        <h2 className="lpLeftHeadings">
                            <div id="aFSDeveloper" onMouseOver={fsdZooms} onMouseOut={fsdZoomsOut}><span id="fsdA">a</span> <span id="fsdFull">full</span><span id="fsd-">-</span><span id="fsdStack">stack</span> <span id="fsdWeb">web</span> <span id="fsdDev">developer</span><span id="fsdPeriod">.</span></div>
                        </h2>
                        <p id="lpTechLine"><span className="lpTechList">JaveScript</span> / <span className="lpTechList">React</span> / <span className="lpTechList">NodeJS</span> / <span className="lpTechList">Bootstrap</span> / <span className="lpTechList">WordPress</span></p>
                    </div>
                </Col>
                <Col md={5} style={{ backgroundColor: "#7E5920" }} id = "chiCol">
                    <div id="lpChiDiv">
                        <img style={{ visibility: "hidden" }} id="lpChiSkyline" src={chiLandscape}></img>
                        <div id = "lpChiBorder" ></div>
                        <div id="lpBrowserLinks2" style = {{visibility: "hidden"}}>
                        <Button className="navBtns2" id = "lpAboutBtn2" onClick={toAbout}>About</Button>
                        <Button className="navBtns2" id= "lpProjectsBtn2" onClick={toProjects}>Projects</Button>
                        <Button className="navBtns2" id= "lpBlogBtn2" onClick={toBlog}>Blog</Button>
                        <Button className="navBtns2" id= "lpContactBtn2" onClick={toContact}>Contact</Button>
                    </div>
                    </div>
                    <div id="lpMockBrowser" className={css(styles.bounceInRight)} >
                        <div id="lpMockBrowserLine">
                            <div id="lpMockBrowserButtonsDiv">
                                <div onClick={MockBrowserClose} className="lpMockBrowserButtons" id="lpMockBrowserRedButton" style={{ backgroundColor: "#fe5b52", marginLeft: ".5em" }}>
                                    <p id="lpMockBrowserRedButtonX" >x</p>
                                </div>
                                <div onClick={MockBrowserMinimize} className="lpMockBrowserButtons" id="lpMockBrowserYellowButton" style={{ backgroundColor: "#e6c028" }}>
                                    <p id="lpMockBrowserYellowButton-" >-</p>
                                </div>
                                <div onClick={MockBrowserExpand} className="lpMockBrowserButtons" id="lpMockBrowserGreenButton" style={{ backgroundColor: "#54c22a" }}>
                                    <p id="lpMockBrowserGreenButtonV">^</p>
                                </div>
                            </div>
                        </div>
                        <div id="lpMeImgDiv">
                            <img id="me1" src="../images/me1.png" style={{ visibility: "hidden" }}></img>
                        </div>
                        <div id="lpBrowserLinks">
                            <Button className="navBtns" id="lpAboutBtn" onClick={toAbout}>About</Button>
                            <Button className="navBtns" id="lpProjectsBtn" onClick={toProjects}>Projects</Button>
                            <Button className="navBtns" id="lpBlogBtn" onClick={toBlog}>Blog</Button>
                            <Button className="navBtns" id="lpContactBtn" onClick={toContact}>Contact</Button>
                        </div>
                        <div id="lpBrowsrerBackground">

                        </div>
                        {/* <div className={css(styles.hinge)} style = {{backgroundColor: "blue", width:"5em", height: "5em"}}></div> */}
                    </div>
                    <div  id = "miniBrowserDiv"style={{ height: "3em" }} >
                        <img id = "miniBrowser" src = "./images/mini_browser.png" onClick={MockBrowserReverseMinimize}></img>
                    </div>
                </Col>
            </Row>
        </div>
    );
}


export default LandingPage;
