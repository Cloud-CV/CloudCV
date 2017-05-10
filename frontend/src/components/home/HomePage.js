import React, { Component } from "react";
import { PropTypes } from "prop-types";
import { Card } from "antd";

const HomePage = () => {
  return (
    <div>
      Hello world.
      <Card title="Ant Design" style={{ width: 300 }}>
        <p>Everything is working fine</p>
      </Card>
    </div>
  );
};

export default HomePage;
