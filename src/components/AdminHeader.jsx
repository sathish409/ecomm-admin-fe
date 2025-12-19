import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from 'react-router-dom';

export const AdminHeader = () => {
  return (
       <Navbar expand="md" className="header mt-4 glass-navbar">
      <Container>
       <Link className="navbar-brand " to="/">Home</Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="  ms-auto">
            <Link className="nav-link" to="/">About</Link>
            <Link className="nav-link" to="/signup">SignUp</Link>
            <Link className="nav-link" to="/login">LogIn</Link>

            <Link className="nav-link" to="home"></Link> 
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    


  )
}
