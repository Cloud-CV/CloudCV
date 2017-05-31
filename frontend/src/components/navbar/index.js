import React, { Component } from "react";
import { PropTypes } from "prop-types";
import { Link, withRouter } from "react-router-dom";
import { connect } from "react-redux";
import NavbarItem from "./NavbarItem";

const Navbar = props => {
  let listItems = ["", "Projects", "News", "GSoC", "Team", "Contribute"];
  listItems = listItems.map((path, index) => {
    let active = `/${path.toLowerCase()}` === props.location.pathname;
    return (
      <NavbarItem active={active} key={path}>
        <Link to={`\/${path.toLowerCase()}`}>
          {path === "" ? "Home" : path}
        </Link>
      </NavbarItem>
    );
  });
  return (
    <nav className="cv-navbar-container">
      <div className="cv-navbar-list-container">
        <ul className="cv-navbar-list">
          {listItems}
        </ul>
      </div>
      <div className="cv-navbar-brand">
        <img
          className="cv-navbar-brand-image"
          src={require("images/cloudcv_logo.png")}
        />
      </div>
    </nav>
  );
};

Navbar.propTypes = {
  match: PropTypes.object.isRequired,
  location: PropTypes.object.isRequired,
  history: PropTypes.object.isRequired
};

function mapStateToProps(state, ownProps) {
  return {};
}

export default withRouter(connect(mapStateToProps)(Navbar));
