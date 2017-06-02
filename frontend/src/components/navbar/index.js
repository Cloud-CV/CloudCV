import React, { Component } from "react";
import { PropTypes } from "prop-types";
import { Link, withRouter } from "react-router-dom";
import NavbarItem from "./NavbarItem";

class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState({ isOpen: !this.state.isOpen });
  }

  render() {
    let listItems = ["", "Projects", "News", "GSoC", "Team", "Contribute"];
    listItems = listItems.map((path, index) => {
      let active = `/${path.toLowerCase()}` === this.props.location.pathname;
      return (
        <NavbarItem active={active} key={path}>
          <Link to={`\/${path.toLowerCase()}`}>
            {path === "" ? "Home" : path}
          </Link>
        </NavbarItem>
      );
    });
    let listHiddenClass = this.state.isOpen ? "" : "hidden-small";
    let listIconClass = this.state.isOpen
      ? "cv-navbar-close-icon"
      : "cv-navbar-list-icon";

    return (
      <nav className="cv-navbar-container">
        <div className={`cv-navbar-list-container ${listHiddenClass}`}>
          <ul className="cv-navbar-list">
            {listItems}
          </ul>
        </div>
        <div className="cv-mobile-topbar">
          <div className="cv-navbar-brand">
            <img
              className="cv-navbar-brand-image"
              src={require("images/cloudcv_logo.png")}
            />
          </div>
          <div
            className={`cv-icon ${listIconClass}`}
            onClick={this.handleClick}
          />
        </div>
        {this.state.isOpen &&
          <div className="cv-navbar-overlay" onClick={this.handleClick} />}
      </nav>
    );
  }
}

Navbar.propTypes = {
  match: PropTypes.object.isRequired,
  location: PropTypes.object.isRequired,
  history: PropTypes.object.isRequired
};

export default withRouter(Navbar);
