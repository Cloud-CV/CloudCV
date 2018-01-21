import CarouselLeft from "./CarouselLeft";
import CarouselRight from "./CarouselRight";
import CarouselMid from "./CarouselMid";
import createReactClass from "create-react-class";
import React from "react";

const CarouselDecorators = [
  {
    component: CarouselLeft,
    position: "CenterLeft"
  },
  {
    component: CarouselRight,
    position: "CenterRight"
  },
  {
    component: CarouselMid,
    position: "BottomCenter"
  }
];

export default CarouselDecorators;
