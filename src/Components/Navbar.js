import React, { Component } from "react";
import { Link } from "react-router-dom";
import "../Css/navbar.css";

const NavbarLink = ({ page }) => {
  const title = page.charAt(0).toUpperCase() + page.slice(1);

  return (
    <Link to={`/${page}`} className="navbarlink-title">
      {title}
    </Link>
  );
};

const Navbar = () => {
  return (
    <div className="navbar ">
      <NavbarLink style={{color:"black"}} page="home" />
      <NavbarLink page="registration" />
      <NavbarLink page="advertise" /> 
      <NavbarLink page="vacancies" />
      <NavbarLink page="applied" />
    </div>
  );
};

export default Navbar;
