import React, { useState } from "react";
import { Menu } from "semantic-ui-react";

const LeaguesNavbar = () => {
  const [activeItem, setActiveItem] = useState("Premier League");
  const handleItemClick = (e, { name }) => setActiveItem(name);
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
