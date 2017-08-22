import React from "react";
import { PropTypes } from "prop-types";
import axios from "axios";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { slide as Menu } from "react-burger-menu";
import Preloader from "../common/Preloader";
import Sidebar from "./Sidebar";
import DemoContainer from "./DemoContainer";
import * as sidebarActions from "../../actions/sidebarActions";
const AJAX_ROOT = process.env.AJAX_ROOT;

class Projects extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isFetching: true,
      demos: [],
      showQueue: this.props.showQueue
    };
    this.fetchDemos = this.fetchDemos.bind(this);
  }

  componentDidMount() {
    this.fetchDemos();
  }

  componentWillReceiveProps(nextProps) {
    if (this.state.showQueue !== nextProps.showQueue) {
      this.setState({ showQueue: nextProps.showQueue });
    }
  }

  fetchDemos() {
    axios
      .get(`${process.env.AJAX_ROOT}/api/demos/demos/`)
      .then(response => {
        this.setState({ isFetching: false, demos: response.data });
      })
      .catch(error => {});
  }

  isMenuOpen(state) {
    this.props.sidebarActions.toggleShowQueue(state.isOpen);
  }

  render() {
    if (this.state.isFetching) return <Preloader />;
    let activeDemo = null;
    let sidebarLinks = this.state.demos.map((demo, index) => {
      let link = `/projects/${demo.permalink}`;
      let active =
        this.props.location.pathname === link ||
        (this.props.location.pathname === "/projects" && index === 0);
      if (active) activeDemo = demo;
      return {
        name: demo.tag_line,
        link,
        active
      };
    });
    return (
      <section className="cv-project-section">
        <Menu
          className="cv-mobile-sidebar"
          isOpen={this.state.showQueue}
          onStateChange={this.isMenuOpen.bind(this)}
          customBurgerIcon={false}
          customCrossIcon={false}
          width={"120px"}
        >
          <Sidebar demos={sidebarLinks} />
        </Menu>
        <Sidebar demos={sidebarLinks} />
        {activeDemo && <DemoContainer demo={activeDemo} />}
      </section>
    );
  }
}

Projects.propTypes = {
  location: PropTypes.object.isRequired,
  sidebarActions: PropTypes.object.isRequired,
  showQueue: PropTypes.bool.isRequired
};

function mapStateToProps(state, ownProps) {
  return {
    showQueue: state.sidebar.showQueue
  };
}

function mapDispatchToProps(dispatch) {
  return {
    sidebarActions: bindActionCreators(sidebarActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Projects);
