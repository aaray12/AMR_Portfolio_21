import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

//pages
import LandingPage from "./pages/Landing"
import AboutPage from "./pages/About"

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path = "/" >
            <LandingPage />
          </Route>
          <Route exact path = "/about" >
            <AboutPage />
          </Route>
        </Switch>
      </div>
    </Router>



  );
}

export default App;
