import React from "react";
import { PropTypes } from "prop-types";
import PersonCard from "./PersonCard";
import Preloader from "../common/Preloader";

class Team extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isFetching: true,
      team: []
    };
    this.fetchTeamMembers = this.fetchTeamMembers.bind(this);
    this.fetchTeamMembers();
  }

  fetchTeamMembers() {}

  render() {
    return (
      <Preloader />
    );
  }
}

export default Team;
