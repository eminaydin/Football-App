import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Menu } from "semantic-ui-react";
import { fetchByCountry } from "../helpers/fetchFunctions";

const LeaguesNavbar = () => {
  const [activeItem, setActiveItem] = useState("Premier League");
  const reduxState = useSelector((state) => state.leagueReducer.league);
  console.log(reduxState);
  const dispatch = useDispatch();
  useEffect(() => {
    fetchByCountry("PL", dispatch);
  }, []);
  const handleItemClick = (e, { name }) => {
    var query =
      name == "Premier League"
        ? "PL"
        : name == "Bundesliga"
        ? "BL1"
        : name == "Primera Division"
        ? "PD"
        : name == "Ligue 1"
        ? "FL1"
        : "SA";
    fetchByCountry(query, dispatch);
    setActiveItem(name);
  };
  return (
    <Menu pointing secondary>
      <Menu.Item
        name="Premier League"
        active={activeItem === "Premier League"}
        onClick={handleItemClick}
      />
      <Menu.Item
        name="Bundesliga"
        active={activeItem === "Bundesliga"}
        onClick={handleItemClick}
      />
      <Menu.Item
        name="Primera Division"
        active={activeItem === "Primera Division"}
        onClick={handleItemClick}
      />

      <Menu.Item
        name="Ligue 1"
        active={activeItem === "Ligue 1"}
        onClick={handleItemClick}
      />
      <Menu.Item
        name="Serie A"
        active={activeItem === "Serie A"}
        onClick={handleItemClick}
      />
    </Menu>
  );
};

export default LeaguesNavbar;
