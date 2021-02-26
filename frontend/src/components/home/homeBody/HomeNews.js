import React from "react";
import { Link } from "react-router-dom";
import TimelineCard from "../../common/TimelineCard";
import Button from "../../common/Button";

const MIN_ELEMENTS = 18;
const EVENTS = [
  {
    date: "March 2020",
    desc: (
      <span>
        CloudCV selected as a mentoring organisation for{" "}
        <Link
          to="https://summerofcode.withgoogle.com/archive/2020/organizations/6719687229964288/"
          target="blank"
          rel="noopener noreferrer"
        >
          GSOC 2020
        </Link>
      </span>
    )
  },

  {
    date: "October 2019",
    desc: (
      <span>
        CloudCV selected as a mentoring organisation for{" "}
        <Link
          to="https://codein.withgoogle.com/archive/2019/organization/5206956352995328/"
          target="blank"
          rel="noopener noreferrer"
        >
          GCI 2019
        </Link>
      </span>
    )
  },

  {
    date: "September 2019",
    desc: (
      <span>
        EvalAI and Fabrik are accepted to{" "}
        <Link
          to="https://sosp19.rcs.uwaterloo.ca/"
          target="blank"
          rel="noopener noreferrer"
        >
          SOSP Conference 2019
        </Link>, Canada
      </span>
    )
  },

  {
    date: "March 2019",
    desc: (
      <span>
        CloudCV selected as a mentoring organisation for{" "}
        <Link
          to="https://summerofcode.withgoogle.com/organizations/5709446018236416/"
          target="blank"
          rel="noopener noreferrer"
        >
          GSOC 2019
        </Link>
      </span>
    )
  },

  {
    date: "September 2018",
    desc: (
      <span>
        CloudCV selected as a mentoring organisation for{" "}
        <Link
          to="https://codein.withgoogle.com/organizations/cloudcv/"
          target="blank"
          rel="noopener noreferrer"
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
          rel="noopener noreferrer"
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
          to="https://codein.withgoogle.com/archive/2017/organization/5692767623708672/"
          target="blank"
          rel="noopener noreferrer"
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
        <Link
          to="http://cvpr2017.thecvf.com/"
          target="blank"
          rel="noopener noreferrer"
        >
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
        <Link
          to="http://www.ldv.co/visionsummit/"
          target="blank"
          rel="noopener noreferrer"
        >
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
          rel="noopener noreferrer"
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
        <Link
          to="http://cvpr2016.thecvf.com/program/demos"
          target="blank"
          rel="noopener noreferrer"
        >
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
          rel="noopener noreferrer"
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
          rel="noopener noreferrer"
        >
          GSoC 2015
        </Link>
      </span>
    )
  },
  {
    date: "January 2014",
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
