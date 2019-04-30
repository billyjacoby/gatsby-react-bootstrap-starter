import React from "react"
import { Link } from "gatsby"

import { Navbar, Nav, Container } from "react-bootstrap"

const CustomNavbar = ({ data }) => {
  return (
    <>
      <Navbar variant="dark" expand="lg" id="site-navbar">
        <Container>
          <Link to="/">
            <Navbar.Brand as="span">Gatsby React Bootstrap</Navbar.Brand>
          </Link>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <Link to="/page-2">
                <Nav.Link as="span" eventKey="page-2">
                  Page 2
                </Nav.Link>
              </Link>
              <Link to="/page-3">
                <Nav.Link as="span" eventKey="page-3">
                  Page 3
                </Nav.Link>
              </Link>
            </Nav>
            <Nav className="mr-auto" />
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  )
}

export default CustomNavbar
