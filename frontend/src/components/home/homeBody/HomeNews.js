import React from "react";
import { Link } from "react-router-dom";
import TimelineCard from "../../common/TimelineCard";

const HomeNews = props => {
  const EVENTS = [
    {
      date: "June 2017",
      desc: (
        <span>
          CloudCV selected for demo presentation at
          {" "}
          <Link to="http://cvpr2017.thecvf.com/" target="blank">CVPR 2017</Link>
          , Hawaii
        </span>
      )
    },
    {
      date: "May 2017",
      desc: (
        <span>
          CloudCV selected as a semifinalist at
          {" "}
          <Link to="http://www.ldv.co/visionsummit/" target="blank">
            LDV Vision Summit 2017
          </Link>
          , New York City
        </span>
      )
    },
    {
      date: "March 2017",
      desc: (
        <span>
          CloudCV selected as a mentoring organisation for
          {" "}
          <Link
            to="https://summerofcode.withgoogle.com/organizations/5427409970003968/"
            target="blank"
          >
            GSoC 2017
          </Link>
        </span>
      )
    },
    {
      date: "May 2016",
      desc: (
        <span>
          CloudCV selected for demo presentation at CVPR 2016, Las Vegas, NV
        </span>
      )
    },
    {
      date: "March 2016",
      desc: (
        <span>
          CloudCV selected as a mentoring organisation for GSOC 2016
        </span>
      )
    },
    {
      date: "March 2015",
      desc: (
        <span>
          CloudCV selected as a mentoring organisation for GSOC 2015
        </span>
      )
    },
    {
      date: "Januray 2014",
      desc: (
        <span>
          NVIDIA supports CloudCV with a GPU hardware donation
        </span>
      )
    },
    {
      date: "October 2013",
      desc: (
        <span>
          CloudCV has been awarded Amazon Web Services (AWS) in Education: Machine Learning Research Grant
        </span>
      )
    }
  ];

  return (
    <div id="news" className="cv-home-news cv-container">
      <div className="cv-home-news-title-container">
        <h2 className="cv-home-news-title">News</h2>
      </div>
      <div>
        <ul className="timeline timeline-centered">
          {EVENTS.map((event, index) => {
            return (
              <TimelineCard key={index} date={event.date}>
                {event.desc}
              </TimelineCard>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default HomeNews;
