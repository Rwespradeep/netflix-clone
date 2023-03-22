import React, { useState } from "react";
import "./List.scss";
import { useRef } from "react";
import ArrowCircleLeftOutlinedIcon from "@mui/icons-material/ArrowCircleLeftOutlined";
import ArrowCircleRightOutlinedIcon from "@mui/icons-material/ArrowCircleRightOutlined";
import ListItem from "../ListItem/ListItem";

const List = ({ list }) => {
  const [slideNumber, setSlideNumber] = useState(0);
  const [isMoved, setIsMoved] = useState(false);

  const listRef = useRef();
  const handleClick = (direction) => {
    setIsMoved(true);
    let distance = listRef.current.getBoundingClientRect().x - 3 * 10;
    if (direction === "left" && slideNumber > 0) {
      setSlideNumber(slideNumber - 1);
      listRef.current.style.transform = `translateX(${40 + distance}px)`;
    }
    if (direction === "right" && slideNumber < 5) {
      setSlideNumber(slideNumber + 1);
      listRef.current.style.transform = `translateX(${-50 + distance}px)`;
    }
    console.log(distance);
  };
  return (
    <div className="List">
      <span className="listTitle">{list.title}</span>
      <div className="wrapper">
        <ArrowCircleLeftOutlinedIcon
          className="sliderArrow left"
          onClick={() => handleClick("left")}
          style={{ display: !isMoved && "none", color: "black" }}
        />
        <div className="container" ref={listRef}>
          {list.content.map((item, index) => (
            <ListItem index={index} item={item} />
          ))}
        </div>
        <ArrowCircleRightOutlinedIcon
          className="sliderArrow right"
          onClick={() => handleClick("right")}
        />
      </div>
    </div>
  );
};

export default List;
