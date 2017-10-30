import React, { Component } from "react";
import { PropTypes } from "prop-types";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as sidebarActions from "../../actions/sidebarActions";
import { Link, withRouter } from "react-router-dom";
import NavbarItem from "./NavbarItem";

class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false,
      isOnTop: (window.pageYOffset ||
        document.documentElement.scrollTop ||
        document.body.scrollTop) === 0
    };
    this.handleClick = this.handleClick.bind(this);
    this.handleScroll = this.handleScroll.bind(this);
    this.showSidebarOnProjectsPage = this.showSidebarOnProjectsPage.bind(this);
    window.addEventListener("scroll", this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener("scroll");
  }

  showSidebarOnProjectsPage() {
    this.props.sidebarActions.toggleShowQueue(!this.props.showQueue);
  }

  handleScroll(event) {
    let isOnTop =
      (window.pageYOffset ||
        document.documentElement.scrollTop ||
        document.body.scrollTop) === 0;
    this.setState({ isOnTop });
  }

  handleClick() {
    this.setState({ isOpen: !this.state.isOpen });
  }

  render() {
    let x = this.props.location.pathname.indexOf("/", 1);
    let firstPath;
    if (x !== -1) {
      firstPath = this.props.location.pathname.substr(1, x - 1);
    } else {
      firstPath = this.props.location.pathname.substr(1);
    }
    let projectActive = firstPath === "projects";
    let listItems = [
      "",
      "Projects",
      "GSoC",
      "Team",
      "Contribute",
      "Contact Us"
    ];
    listItems = listItems.map((path, index) => {
      if (path === "GSoC") {
        return (
          <NavbarItem active={false} key={path}>
            <Link to="http://gsoc.cloudcv.org" target="_blank">
              {path}
            </Link>
          </NavbarItem>
        );
      }
      let active = path.toLowerCase() === firstPath;
      let formattedPath = path.toLowerCase().replace(/ /g, "-");
      return (
        <NavbarItem active={active} key={path}>
          <Link to={`\/${formattedPath}`}>
            {path === "" ? "Home" : path}
          </Link>
        </NavbarItem>
      );
    });
    let listHiddenClass = this.state.isOpen ? "" : "hidden-small";
    let sidebarIconClass = "cv-navbar-list-icon";
    let listIconClass = this.state.isOpen
      ? "cv-navbar-close-icon"
      : "cv-navbar-list-icon";
    let navbarClass = this.state.isOnTop ? "" : "navbar-box-shadow";
    return (
      <nav className={`cv-navbar-container cv-container ${navbarClass}`}>
        <div className={`cv-navbar-list-container ${listHiddenClass}`}>
          <ul className="cv-navbar-list">
            {listItems}
          </ul>
        </div>
        <div className="cv-mobile-topbar">
          {projectActive &&
            <div
              className={`cv-icon ${sidebarIconClass}`}
              onClick={this.showSidebarOnProjectsPage}
            />}
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
  history: PropTypes.object.isRequired,
  sidebarActions: PropTypes.object.isRequired,
  showQueue: PropTypes.bool.isRequired
};

function mapStateToProps(state, ownProps) {
  return {
    showQueue: state.sidebar.showQueue,
    match: ownProps.match,
    location: ownProps.location,
    history: ownProps.history
  };
}

function mapDispatchToProps(dispatch) {
  return {
    sidebarActions: bindActionCreators(sidebarActions, dispatch)
  };
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Navbar));
