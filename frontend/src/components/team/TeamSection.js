import React from "react";
import { PropTypes } from "prop-types";
import PersonCard from "./PersonCard";

const TeamSection = props => {
  const TITLE = props.title === "Team"
    ? <h1 className="cv-home-showcase-heading">{props.title}</h1>
    : <h3 className="cv-home-showcase-heading">{props.title}</h3>;
  const MEMBERS = props.members;
  const YEARS = [2017, 2016, 2015];
  const memberElements = props.title === "GSoC Students, Mentors and Interns"
    ? YEARS.map((year, index) => {
        return (
          <div key={index}>
            <h4 className="cv-team-subsection-heading">{year}</h4>
            <div className="cv-team-section-members">
              {MEMBERS.map((member, index) => {
                if (member.year === year) {
                  const NAME = member.name;
                  const DESCRIPTION = member.description;
                  const IMAGE =
                    member.image || require("../../images/default_person.jpg");
                  const LINK =
                    member.personal_website ||
                    (member.linkedin_url ||
                      (member.github_url || `mailto:${member.email}`));
                  return (
                    <PersonCard
                      key={index}
                      name={NAME}
                      description={DESCRIPTION}
                      image={IMAGE}
                      link={LINK}
                    />
                  );
                }
              })}
            </div>
          </div>
        );
      })
    : <div className="cv-team-section-members">
        {MEMBERS.map((member, index) => {
          const NAME = member.name;
          const DESCRIPTION = member.description;
          const IMAGE =
            member.image || require("../../images/default_person.jpg");
          const LINK =
            member.personal_website ||
            (member.linkedin_url ||
              (member.github_url || `mailto:${member.email}`));
          return (
            <PersonCard
              key={index}
              name={NAME}
              description={DESCRIPTION}
              image={IMAGE}
              link={LINK}
            />
          );
        })}
      </div>;

  return (
    <div className={`cv-team-section ${props.extraClass}`}>
      <div className="cv-team-section-heading">
        {TITLE}
      </div>
      {memberElements}
    </div>
  );
};

TeamSection.defaultProps = {
  title: "",
  members: [],
  extraClass: ""
};

TeamSection.propTypes = {
  title: PropTypes.string.isRequired,
  members: PropTypes.array.isRequired,
  extraClass: PropTypes.string
};

export default TeamSection;
