import React, { Fragment, useState } from "react";
import { useSelector } from "react-redux";
import {
  Link,
  Route,
  Switch,
  useLocation,
  useParams,
  useRouteMatch,
} from "react-router-dom";
import { Icon, Menu, Segment, Sidebar } from "semantic-ui-react";
import EntryMessage from "./EntryMessage";
import Leagues from "./Leagues";
import LeagueStandings from "./LeagueStandings";
import TeamView from "./TeamView";

const SideBar = () => {
  const [visible, setVisible] = useState(true);
  const currentRoute = useLocation().pathname;
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
        >
          <Menu.Item as={Link} to="/leagues">
            <Icon name="home" />
            League
          </Menu.Item>
          <Menu.Item as="a">
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
          <Segment basic>
            <Switch>
              <Route
                path="/teams/:teamName"
                render={(props) => <TeamView {...props} />}
              />
              <Route
                path="/leagues"
                render={() => (
                  <Fragment>
                    <Leagues />
                    {leagueState && <LeagueStandings />}
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
