import React from "react";
import { Navbar, Nav, Container, NavDropdown } from 'react-bootstrap';
import "../App.css"


function NavBar() {
    return (
<Navbar expand="lg" id = "navBar">
  <Container>
    <Navbar.Brand href="/"><img src = "./images/AMR_Logo.png" style ={{width: "2.5em", margin:"-.5em"}}></img></Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="me-auto">
        <Nav.Link href="/about" id = "navAbout">About</Nav.Link>
        <Nav.Link href="/projects" id = "navProjects">Projects</Nav.Link>
        <Nav.Link href="/blog" id = "navBlog">Blog</Nav.Link>
        <Nav.Link href="/contact" id = "navContact">Contact</Nav.Link>
        {/* <NavDropdown title="Dropdown" id="basic-nav-dropdown">
          <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
        </NavDropdown> */}
      </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>
    );
}


export default NavBar;