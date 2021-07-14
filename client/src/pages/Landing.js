import React from "react";
import { Col, Row, Container} from 'react-bootstrap';


function LandingPage() {
    return (
        //heroku test automatic deploy
        <div >
        <Row id = "lpRow">
            <Col id = "lpRightCol" md={7}>
            <div>
                <h4>
                    Aaron Ray
                </h4>
            </div>
            </Col>
            <Col md={5} style ={{backgroundColor:"#7E5920"}}>
                <div id ="lpMockBrowser" >
                    <div id = "lpMockBrowserLine">

                    </div>
                </div>
            <div style = {{height:"3em"}} >
        </div>
            </Col>
        </Row>
        </div>
    );
}


export default LandingPage;
