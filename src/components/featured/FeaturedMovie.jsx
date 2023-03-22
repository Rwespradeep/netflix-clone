import React from "react";
import "./FeaturedMovie.scss";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
const FeaturedMovie = ({ type }) => {
  return (
    <div className="featured">
      {type && (
        <div className="category">
          <span>{type === "movies" ? "Movies" : "Series"}</span>
          <select name="genre" id="genre">
            <option>Genre</option>
            <option value="adventure">Adventure</option>
            <option value="comedy">Comedy</option>
            <option value="sci-fi">Sci-fi</option>
            <option value="horror">Horror</option>
            <option value="romance">Romance</option>
            <option value="documentary">Documentary</option>
          </select>
        </div>
      )}
      <img width="100%" src="./endgame_cover2.jpg" alt="" />
      <div className="info">
        <img src="./title.png" alt="" />
        <span className="description">
          Avengers assemble together for one last time, goes back in time and
          destroys Mighty Thanos
        </span>
        <div className="buttons">
          <button className="play">
            <PlayArrowIcon />
            <span>Play</span>
          </button>
          <button className="more">
            <InfoOutlinedIcon />
            <span>Info</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default FeaturedMovie;
