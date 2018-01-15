import React, { Component } from "react";
import PropTypes from "prop-types";
import { withRouter } from "react-router-dom";

const NavbarItem = props => {
  let activeClass = props.active ? "active" : "";

  return (
    <li className={`cv-navbar-list-item ${activeClass}`}>{props.children}</li>
  );
};

NavbarItem.propTypes = {
  active: PropTypes.bool.isRequired,
  children: PropTypes.object.isRequired
};

export default NavbarItem;
