import React, { Fragment } from "react";
import { useSelector } from "react-redux";
import { Grid, Header, Image } from "semantic-ui-react";
import moment from "moment";
const NextMatch = () => {
  const teamFixture = useSelector((state) => state.teamReducer.fixture);
  const teamInfo = useSelector((state) => state.leagueReducer.league)
    .standings[0].table;
  let nextMatch = teamFixture?.matches.find(
    (match) => match.status === "SCHEDULED"
  );

  var formattedDate = moment
    .utc(nextMatch?.utcDate)
    .local()
    .format("MMM D, HH:mm");

  const getTeamLogo = (team) => {
    let teamStatus = team === "home" ? "homeTeam" : "awayTeam";
    let teamId = nextMatch?.[teamStatus].id;
    let ourTeam = teamInfo?.find(({ team }) => team.id === teamId);
    return ourTeam?.team.crestUrl;
  };
  const styles = {
    color: "white",
  };
  return (
    <Fragment>
      <div className="fixtureContainer"></div>
      <Grid columns={3} divided className="bg-text">
        <Grid.Row>
          <Grid.Column className="logoColumn" verticalAlign="middle">
            <Image src={getTeamLogo("home")} size="small" />
            <Header as="h1" style={{ color: styles.color }}>
              {nextMatch?.homeTeam.name}
            </Header>
          </Grid.Column>
          <Grid.Column verticalAlign="middle">
            <Header as="h2" style={{ color: styles.color }}>
              Upcoming Match
            </Header>
            <Header as="h1" style={{ color: styles.color }}>
              {" "}
              {formattedDate}
            </Header>
          </Grid.Column>
          <Grid.Column className="logoColumn" verticalAlign="middle">
            <Image src={getTeamLogo("away")} size="small" />
            <Header as="h1" style={{ color: styles.color }}>
              {nextMatch?.awayTeam.name}
            </Header>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Fragment>
  );
};

export default NextMatch;
