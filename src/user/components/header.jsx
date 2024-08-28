import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

const Header = ({ onRegionChange }) => {
  return (
    <div className="headerWidth  row">
      <Navbar bg="white" variant="white" expand="lg">
        <Navbar.Brand className="ml-2 bold-text">Countries</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
          <NavLink className="nav-link" to="#" onClick={() => onRegionChange("All")}>All</NavLink>
          <NavLink className="nav-link" to="#" onClick={() => onRegionChange("Asia")}>Asia</NavLink>
          <NavLink className="nav-link" to="#" onClick={() => onRegionChange("Europe")}>Europe</NavLink>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};

export default Header;