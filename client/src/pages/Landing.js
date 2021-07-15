import React from "react";
import { Col, Row, Container} from 'react-bootstrap';
import { hinge, bounceInRight, zoomOutDown, zoomIn } from 'react-animations';
import { StyleSheet, css } from 'aphrodite';


function LandingPage() {
    const styles = StyleSheet.create({
        hinge: {
          animationName: hinge,
          animationDuration: '2s'
        },
        bounceInRight: {
            animationName: bounceInRight,
            animationDuration: '1.5s'
          },
          zoomOutDown: {
            animationName: zoomOutDown,
            animationDuration: '1s'
          },
          zoomIn: {
            animationName: zoomIn,
            animationDuration: '1s'
          }
      })
      function MockBrowserClose(e){
        e.preventDefault();
        document.getElementById("lpMockBrowser").style.display = "none"
      }
      function MockBrowserMinimize(e){
        e.preventDefault();
        document.getElementById("lpMockBrowser").classList.add(css(styles.zoomOutDown))
        function WaitToClose(){
            document.getElementById("lpMockBrowser").style.display = "none"
        }
        setTimeout(WaitToClose, 1000);
      }
      function MockBrowserExpand(e){
        e.preventDefault();
        document.getElementById("lpMockBrowser").style.width="200vh"
        document.getElementById("lpMockBrowser").style.height="100vh"
        document.getElementById("lpMockBrowser").style.marginTop="0em"
        document.getElementById("lpMockBrowser").style.right="53em"
      }
    return (
        //heroku test automatic deploy
        <div >
        <Row id = "lpRow">
            <Col id = "lpRightCol" md={7}>
            <div id = "lpTextDiv">
                <h2>
                    Hey,
                </h2>
                <h2>
                    I'm Aaron,
                </h2>
                <h2>
                    a full-stack web developer.
                </h2>
            </div>
            </Col>
            <Col md={5} style ={{backgroundColor:"#7E5920"}}>
                <div id ="lpMockBrowser" className={css(styles.bounceInRight)} >
                    <div id = "lpMockBrowserLine">
                        <div id = "lpMockBrowserButtonsDiv">
                            <div onClick = {MockBrowserClose} className ="lpMockBrowserButtons" style ={{backgroundColor:"#fe5b52", marginLeft:".5em"}}>
                                <p id = "lpMockBrowserRedButtonX" >x</p>
                            </div>
                            <div  onClick = {MockBrowserMinimize} className ="lpMockBrowserButtons" style ={{backgroundColor:"#e6c028"}}>
                            </div>
                            <div  onClick = {MockBrowserExpand} className = "lpMockBrowserButtons" style ={{backgroundColor:"#54c22a"}}>
                            </div>
                        </div>
                    </div>
                    {/* <div className={css(styles.hinge)} style = {{backgroundColor: "blue", width:"5em", height: "5em"}}></div> */}
                </div>
            <div style = {{height:"3em"}} >
        </div>
            </Col>
        </Row>
        </div>
    );
}


export default LandingPage;
