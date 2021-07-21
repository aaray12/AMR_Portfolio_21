import React from "react";
import { Image } from 'cloudinary-react';
import { Col, Row, Container, Button } from 'react-bootstrap';
import { hinge, bounceInRight, zoomOutDown, zoomIn, zoomInUp,zoomOut,
        fadeInLeft, fadeInDown,fadeIn, flipInX, headShake, pulse } from 'react-animations';
import { StyleSheet, css } from 'aphrodite';

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
        bounceInRight: {
            animationName: bounceInRight,
            animationDuration: '1.5s'
        },
       pulse: {
            animationName:pulse,
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
            animationDuration: '.5s'
        },
        zoomInUp: {
            animationName: zoomInUp,
            animationDuration: '3.33s'
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
            animationDuration: '2.5s'
        },
        flipInX: {
            animationName: flipInX,
            animationDuration: '2.25s'
        }
    })
    function MockBrowserClose(e) {
        e.preventDefault();
        document.getElementById("lpMockBrowser").style.display = "none"
        function showSkyline(){
            document.getElementById("lpChiSkyline").style.visibility = "visible"
            document.getElementById("lpChiSkyline").classList.add(css(styles.fadeIn))

        }
        setTimeout(showSkyline, 1250);
    }
    function MockBrowserMinimize(e) {
        e.preventDefault();
        document.getElementById("lpMockBrowser").classList.add(css(styles.zoomOutDown))
        function WaitToClose() {
            document.getElementById("lpMockBrowser").style.display = "none"
        }
        function showSkyline(){
            document.getElementById("lpChiSkyline").style.visibility = "visible"
            document.getElementById("lpChiSkyline").classList.add(css(styles.fadeIn))

        }
        setTimeout(WaitToClose, 1000);
        setTimeout(showSkyline, 2000);
    }
    function MockBrowserExpand(e) {
        e.preventDefault();
        document.getElementById("lpMockBrowser").style.width = "191.5vh"
        document.getElementById("lpMockBrowser").style.height = "100vh"
        document.getElementById("lpMockBrowser").style.marginTop = "0em"
        document.getElementById("lpMockBrowser").style.right = "46.25em"
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
    function showAboutBtn(){
        document.getElementById('lpAboutBtn').style.visibility = "visible"
        document.getElementById('lpAboutBtn').classList.add(css(styles.zoomInUp))
    }
    function showProjectsBtn(){
        document.getElementById('lpProjectsBtn').style.visibility = "visible"
        document.getElementById('lpProjectsBtn').classList.add(css(styles.zoomInUp))
    }
    function showContactBtn(){
        document.getElementById('lpContactBtn').style.visibility = "visible"
        document.getElementById('lpContactBtn').classList.add(css(styles.zoomInUp))
    }
    function showBlogBtn(){
        document.getElementById('lpBlogBtn').style.visibility = "visible"
        document.getElementById('lpBlogBtn').classList.add(css(styles.zoomInUp))
    }
    function Reload() {
        window.location.reload()
    }

    setTimeout(() => { document.getElementById("lpMockBrowser").style.backgroundColor = "#14213d" }, 1250);
    setTimeout(showMe1, 2500);
    setTimeout(() => { document.getElementById("lpBrowsrerBackground").style.opacity = "100%" }, 2500);
    setTimeout(() => { document.getElementById("lpBrowsrerBackground").style.opacity = "100%" }, 2500);
    setTimeout(showAboutBtn, 2000);
    setTimeout(showProjectsBtn, 2250);
    setTimeout(showBlogBtn, 2500);
    setTimeout(showContactBtn, 2750);

    function heyShake(){
        document.getElementById('lpHey').classList.add(css(styles.headShake))
    }
    function heyShakeOut(){
        document.getElementById('lpHey').classList.remove(css(styles.headShake))
    }
    function imAaBounce(){
        document.getElementById('lpImAaron').classList.add(css(styles.pulse))
    }
    function imAaBounceOut(){
        document.getElementById('lpImAaron').classList.remove(css(styles.pulse))
    }
    function fsdZooms(){
        document.getElementById('fsdA').classList.add(css(styles.zoomOut))
        setTimeout(()=>{document.getElementById('fsdA').style.visibility = "hidden"}, 500)
        setTimeout(()=>{document.getElementById('fsdA').style.visibility = "visible"; document.getElementById('fsdA').classList.add(css(styles.zoomIn))}, 750)
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
                        <h2 className = "lpLeftHeadings">
                            <div id = "lpHey" onMouseOver = { heyShake} onMouseOut = {heyShakeOut} ><span id = "hInHey">H</span>ey,</div>
                        </h2>
                        <h2 className = "lpLeftHeadings">
                           <div id = "lpImAaron" onMouseOver = { imAaBounce} onMouseOut = {imAaBounceOut}>I'm Aaron,</div>
                        </h2>
                        <h2 className = "lpLeftHeadings">
                           <div id = "aFSDeveloper" onMouseOver = { fsdZooms}><span id = "fsdA">a</span> <span id = "fsdFull">full</span><span id = "fsd-">-</span><span id = "fsdStack">stack</span> <span id = "fsdWeb">web</span> <span id = "fsdDev">developer</span><span id = "fsdPeriod">.</span></div> 
                        </h2>
                        <p id = "lpTechLine"><span>JaveScript</span> / <span>React</span> / <span>NodeJS</span> / <span>Bootstrap</span> / <span>WordPress</span></p>
                    </div>
                </Col>
                <Col md={5} style={{ backgroundColor: "#7E5920" }}>
                <div id = "lpChiDiv">
                            <img style = {{visibility: "hidden"}} id = "lpChiSkyline" src = {chiLandscape}></img>
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
                        <div id ="lpBrowserLinks">
                            <Button className="navBtns" id = "lpAboutBtn">About</Button>
                            <Button className="navBtns" id = "lpProjectsBtn">Projects</Button>
                            <Button className="navBtns" id = "lpBlogBtn">Blog</Button>
                            <Button className="navBtns" id = "lpContactBtn">Contact</Button>
                        </div>
                        <div id="lpBrowsrerBackground">

                        </div>
                        {/* <div className={css(styles.hinge)} style = {{backgroundColor: "blue", width:"5em", height: "5em"}}></div> */}
                    </div>
                    <div style={{ height: "3em" }} >
                    </div>
                </Col>
            </Row>
        </div>
    );
}


export default LandingPage;
