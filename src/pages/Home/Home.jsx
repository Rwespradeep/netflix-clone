import React, { useEffect, useState } from "react";
import FeaturedMovie from "../../components/featured/FeaturedMovie";
import List from "../../components/List/List";
import Navbar from "../../components/Navbar/Navbar";
import "./Home.scss";
import axios from "axios";

const Home = ({ type }) => {
  const [lists, setLists] = useState([]);
  const [genre, setGenre] = useState(null);

  ////inside axios - if my request starts with "/api" it should go to 8080end point

  useEffect(() => {
    const getRandomLists = async () => {
      try {
        const res = await axios.get(
          `/api/lists${type ? "?type=" + type : ""}${
            genre ? "&genre=" + genre : ""
          }`,
          {
            headers: {
              token:
                "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0MTlhNDc0OTIzMmYyZGU4MDg2NTQzZCIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY3OTQ3Njk4OSwiZXhwIjoxNjc5OTA4OTg5fQ.LMZ2MvAMlInz1feSBr6sLPlcqVul58CSOSmZH7Xftt4",
            },
          }
        );
        setLists(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    getRandomLists();
  }, [type, genre]);
  return (
    <div className="home">
      <Navbar />
      <FeaturedMovie type={type} />
      {lists.map((list) => (
        <List list={list} />
      ))}
    </div>
  );
};

export default Home;
