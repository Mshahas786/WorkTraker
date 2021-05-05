import React from 'react';
import {Navbar, Nav, NavDropdown } from "react-bootstrap";
import {BrowserRouter as Link } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <Navbar sticky="top" bg="light" expand="md">
        <Navbar.Brand>WorkTraker</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link ><Link to="/">Home</Link></Nav.Link>
            <Nav.Link><Link to="/Roster">Roster</Link></Nav.Link>
            <Nav.Link to="/Shifts">Shifts</Nav.Link>
            <Nav.Link to="/Chat">Chat</Nav.Link>
            <Nav.Link to="/Settings">Settings</Nav.Link>


            {/* <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown> */}


          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};

export default Header;
