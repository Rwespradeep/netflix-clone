import React, { useEffect, useState } from "react";
import "./ListItem.scss";
import PlayCircleFilledOutlinedIcon from "@mui/icons-material/PlayCircleFilledOutlined";
import AddOutlinedIcon from "@mui/icons-material/AddOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import HeartBrokenOutlinedIcon from "@mui/icons-material/HeartBrokenOutlined";
import axios from "axios";
import ReactPlayer from "react-player";

const ListItem = ({ index, item }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [movie, setMovie] = useState({});
  useEffect(() => {
    const getMovie = async () => {
      try {
        const res = await axios.get("/api/movie/find" + item, {
          headers: {
            token:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0MTlhNDc0OTIzMmYyZGU4MDg2NTQzZCIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY3OTQ3Njk4OSwiZXhwIjoxNjc5OTA4OTg5fQ.LMZ2MvAMlInz1feSBr6sLPlcqVul58CSOSmZH7Xftt4",
          },
        });
        console.log(res);
        setMovie(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    getMovie();
  }, [item]);
  return (
    <div
      className="listItem"
      style={{ left: isHovered && index * 225 - 50 + index * 4 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <img src={movie.img} alt="" />
      {isHovered && (
        <>
          {/* <video src={movie.trailer} autoPlay={true} loop /> */}
          <ReactPlayer className="video" url={movie.trailer} />
          <div className="itemInfo">
            <div className="icons">
              <PlayCircleFilledOutlinedIcon className="icon" />
              <AddOutlinedIcon className="icon" />
              <FavoriteBorderOutlinedIcon className="icon" />
              <HeartBrokenOutlinedIcon className="icon" />
            </div>
            <div className="itemInfotop">
              <span>{movie.duration}</span>
              <span className="ageLimit">{movie.limit}</span>
              <span>{movie.year}</span>
            </div>
            <div className="description">{movie.description}</div>
            <div className="genre">{movie.genre}</div>
          </div>
        </>
      )}
    </div>
  );
};

export default ListItem;
