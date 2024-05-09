import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";

function MyNavBar() {
  return (
    <div>
      <Navbar collapseOnSelect variant="dark" bg="dark" expand="lg">
        <Container>
          <Navbar.Brand>My NavBar</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-nav-bar"></Navbar.Toggle>
          <Navbar.Collapse id="responsive-nav-bar">
            <Nav className="me-auto">
              {/* <Nav.Link>
                <Link to="/">Home</Link>
              </Nav.Link>
              <Nav.Link>
                <Link to="/about">About</Link>
              </Nav.Link>
              <Nav.Link>
                <Link to="/contact">Contact Us</Link>
              </Nav.Link>
              <Nav.Link>
                <Link to="/services">Services</Link>
              </Nav.Link> */}
              <Nav.Link>
                <Link to="/login">Login</Link>
              </Nav.Link>
              <Nav.Link>
                <Link to="/dashboard">.</Link>
              </Nav.Link>
              {/* <Nav.Link>
                <Link to="/index">Dashboard</Link>
              </Nav.Link> */}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default MyNavBar;
