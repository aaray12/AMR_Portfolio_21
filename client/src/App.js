import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

//pages
import LandingPage from "./pages/Landing"
import AboutPage from "./pages/About"
import BlogPage from "./pages/Blog"
import ContactPage from "./pages/Contact"
import ContactTYPage from "./pages/ContactTY"

import ProjectsPage from "./pages/Projects"

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
          <Route exact path = "/projects" >
            <ProjectsPage />
          </Route>
          <Route exact path = "/blog" >
            <BlogPage />
          </Route>
          <Route exact path = "/contact" >
            <ContactPage />
          </Route>
          <Route exact path = "/sent" >
            <ContactTYPage />
          </Route>
        </Switch>
      </div>
    </Router>



  );
}

export default App;
