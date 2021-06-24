import React from "react";
import { slide as Menu } from "react-burger-menu";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <Menu>
      <Link to="/" className="navbar__menuItem">
        Home
      </Link>
      <Link to="/about" className="navbar__menuItem">
        About
      </Link>
      <Link to="/projects" className="navbar__menuItem">
        Projects
      </Link>
      <Link to="/skills" className="navbar__menuItem">
        Skills
      </Link>
      <Link to="/contact" className="navbar__menuItem">
        Contact
      </Link>
    </Menu>
  );
};

export default NavBar;
