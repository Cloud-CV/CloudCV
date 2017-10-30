import React from "react";
import { PropTypes } from "prop-types";
import axios from "axios";
import TeamSection from "./TeamSection";
import PersonCard from "./PersonCard";
import Preloader from "../common/Preloader";

const AJAX_ROOT = process.env.AJAX_ROOT;
const CORE_TYPE = "Team";
const INTERN_TYPE = "GSoC Students, Mentors and Interns";
const CONTRIBUTOR_TYPE = "Contributors";

class Team extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isFetching: true,
      coreMembers: [],
      internMembers: [],
      contributorMembers: []
    };
    this.fetchTeamMembers = this.fetchTeamMembers.bind(this);
    this.fetchTeamMembers();
  }

  fetchTeamMembers() {
    axios
      .get(`${process.env.AJAX_ROOT}/api/web/team`)
      .then(response => {
        this.sortTeamMembers(response.data);
      })
      .catch(error => {
        //Redirect
      });
  }

  sortTeamMembers(members) {
    let coreMembers = [];
    let internMembers = [];
    let contributorMembers = [];
    if (members.length === 0) this.setState({ isFetching: false });
    members.forEach((member, index, array) => {
      if (member.team_type === CORE_TYPE) coreMembers.push(member);
      else if (member.team_type === INTERN_TYPE) internMembers.push(member);
      else if (member.team_type === CONTRIBUTOR_TYPE)
        contributorMembers.push(member);
      if (index === array.length - 1)
        this.setState({
          coreMembers,
          internMembers,
          contributorMembers,
          isFetching: false
        });
    });
  }

  render() {
    return (
      <div>
        {this.state.isFetching && <Preloader />}
        {!this.state.isFetching &&
          <div className="cv-container cv-team-page">
            <TeamSection
              members={this.state.coreMembers}
              title={CORE_TYPE}
              extraClass="cv-team-core"
            />
            <TeamSection
              members={this.state.internMembers}
              title={INTERN_TYPE}
            />
            <TeamSection
              members={this.state.contributorMembers}
              title={CONTRIBUTOR_TYPE}
            />
          </div>}
        ;
      </div>
    );
  }
}

export default Team;
