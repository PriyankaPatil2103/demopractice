import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-scroll";

function scrollbar() {
  return (
    <div>
      <Navbar expand="lg" className="bg-body-tertiary" fixed="top">
        <Container>
          <Navbar.Brand>MyFoodApp</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive -nav-bar"></Navbar.Toggle>
          <Navbar.Collapse id="responsice-nav-bar">
            <Nav className="me-auto">
              <Nav.Link>
                <Link to="home">Home</Link>
              </Nav.Link>
              <Nav.Link>
                <Link to="about">About</Link>
              </Nav.Link>
              <Nav.Link>
                <Link to="contact">Contact</Link>
              </Nav.Link>
              <Nav.Link>
                <Link to="services">Services</Link>
              </Nav.Link>
              <Nav.Link>
                <Link to="login">Login</Link>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default scrollbar;
