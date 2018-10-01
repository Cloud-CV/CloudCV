import React from "react";
import { Link } from "react-router-dom";
import TimelineCard from "../../common/TimelineCard";
import Button from "../../common/Button";

const MIN_ELEMENTS = 14;

const EVENTS = [
{
    date: "September 2018",
    desc: (
      <span>
        CloudCV selected as a mentoring organisation for{" "}
        <Link
          to="https://codein.withgoogle.com/organizations/cloudcv/"
          target="blank"
        >
          GCI 2018
        </Link>
      </span>
    )
  },
    {
    date: "March 2018",
    desc: (
      <span>
        CloudCV selected as a mentoring organisation for{" "}
        <Link
          to="https://summerofcode.withgoogle.com/organizations/4737237502132224/"
          target="blank"
        >
          GSOC 2018
        </Link>
      </span>
    )
  },
  {
    date: "November 2017",
    desc: (
      <span>
        CloudCV selected as a mentoring organisation for{" "}
        <Link
          to="https://codein.withgoogle.com/organizations/cloudcv/"
          target="blank"
        >
          GCI 2017
        </Link>
      </span>
    )
  },
  {
    date: "June 2017",
    desc: (
      <span>
        CloudCV selected for demo presentation at{" "}
        <Link to="http://cvpr2017.thecvf.com/" target="blank">
          CVPR 2017
        </Link>
        , Hawaii
      </span>
    )
  },
  {
    date: "May 2017",
    desc: (
      <span>
        CloudCV selected as a semifinalist at{" "}
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
        CloudCV selected as a mentoring organisation for{" "}
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
        CloudCV selected for demo presentation at{" "}
        <Link to="http://cvpr2016.thecvf.com/program/demos" target="blank">
          CVPR 2016
        </Link>
        , Las Vegas, NV
      </span>
    )
  },
  {
    date: "March 2016",
    desc: (
      <span>
        CloudCV selected as a mentoring organisation for{" "}
        <Link
          to="https://summerofcode.withgoogle.com/archive/2016/organizations/4785685563179008/"
          target="blank"
        >
          GSoC 2016
        </Link>
      </span>
    )
  },
  {
    date: "March 2015",
    desc: (
      <span>
        CloudCV selected as a mentoring organisation for{" "}
        <Link
          to="https://www.google-melange.com/archive/gsoc/2015/orgs/cloudcv"
          target="blank"
        >
          GSoC 2015
        </Link>
      </span>
    )
  },
  {
    date: "Januray 2014",
    desc: <span>NVIDIA supports CloudCV with a GPU hardware donation</span>
  },
  {
    date: "October 2013",
    desc: (
      <span>
        CloudCV has been awarded Amazon Web Services (AWS) in Education: Machine
        Learning Research Grant
      </span>
    )
  }
];

class HomeNews extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showFull: EVENTS.length <= MIN_ELEMENTS
    };
    this.loadMore = this.loadMore.bind(this);
  }

  loadMore(event) {
    this.setState({ showFull: true });
  }

  render() {
    const EVENT_ELEMENTS = this.state.showFull
      ? EVENTS
      : EVENTS.slice(0, MIN_ELEMENTS);
    return (
      <div id="news" className="cv-home-news cv-container">
        <div className="cv-home-news-title-container">
          <h2 className="cv-home-news-title">News</h2>
        </div>
        <div className="cv-home-news-timeline-container">
          <ul className="timeline timeline-centered">
            {EVENT_ELEMENTS.map((event, index) => {
              return (
                <TimelineCard key={index} date={event.date}>
                  {event.desc}
                </TimelineCard>
              );
            })}
          </ul>
          {!this.state.showFull && (
            <Button
              themeClass="cv-button-dark"
              extraClass="cv-button-small"
              onClick={this.loadMore}
            >
              Show More
            </Button>
          )}
        </div>
      </div>
    );
  }
}

export default HomeNews;
