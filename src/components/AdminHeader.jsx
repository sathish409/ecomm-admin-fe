import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from 'react-router-dom';
import { FaHome } from "react-icons/fa";
import { FaSignInAlt } from "react-icons/fa";
import { SiGnuprivacyguard } from "react-icons/si";

export const AdminHeader = () => {
  return (
       <Navbar expand="md" className="header mt-4 glass-navbar">
      <Container>
       <Link className="navbar-brand text-white " to="/"><FaHome />Home</Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="flex gap-2 ms-auto">
            <Link className="nav-link text-white " to="/">About</Link>
            <Link className="nav-link text-white " to="/signup"><SiGnuprivacyguard />SignUp</Link>
            <Link className="nav-link text-white " to="/login"><FaSignInAlt />LogIn</Link>

            <Link className="nav-link" to="home"></Link> 
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    


  )
}
