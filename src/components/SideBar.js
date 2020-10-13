import React, { Fragment, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link, Route, Switch } from "react-router-dom";
import { Icon, Menu, Segment, Sidebar } from "semantic-ui-react";
import EntryMessage from "./EntryMessage";
import LeagueStandings from "./LeagueStandings";
import TeamView from "./TeamView";
import football from "../assets/football.jpg";
import NewsCarousel from "./NewsCarousel";
import LeaguesNavbar from "./LeaguesNavbar";
import MatchSlider from "./MatchSlider";

const SideBar = () => {
  const [visible, setVisible] = useState(true);
  const leagueState = useSelector((state) => state.leagueReducer.league);

  return (
    <Fragment>
      <Sidebar.Pushable as={Segment} className="mainDiv">
        <Sidebar
          as={Menu}
          animation="scale down"
          icon="labeled"
          inverted
          vertical
          visible={visible}
          width="thin"
          style={{ backgroundImage: `url(${football})` }}
        >
          <Menu.Item as={Link} to="/leagues">
            <Icon name="home" />
            League
          </Menu.Item>
          <Menu.Item as={Link} to="/">
            <Icon name="gamepad" />
            Cups
          </Menu.Item>
          <Menu.Item as="a">
            <Icon name="camera" />
            News
          </Menu.Item>
        </Sidebar>

        <Sidebar.Pusher>
          <Icon
            name={visible ? "angle double left" : "angle double right"}
            className="sideBarIcon"
            onClick={() => setVisible(!visible)}
            size="big"
            circular
          />
          <Segment basic style={{ width: "80%", margin: "auto" }}>
            <Switch>
              <Route
                path="/teams/:teamName"
                render={(props) => <TeamView {...props} />}
              />
              <Route
                path="/leagues"
                render={() => (
                  <Fragment>
                    <MatchSlider />
                    <LeaguesNavbar />
                    <NewsCarousel />
                    <LeagueStandings />
                  </Fragment>
                )}
              />
              <Route path="/" exact render={() => <EntryMessage />} />
            </Switch>
          </Segment>
        </Sidebar.Pusher>
      </Sidebar.Pushable>
    </Fragment>
  );
};

export default SideBar;
