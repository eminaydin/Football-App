import React from "react";
import { useSelector } from "react-redux";
import { Link, useRouteMatch } from "react-router-dom";
import { Table } from "semantic-ui-react";
const LeagueStandings = () => {
  const state = useSelector((state) => state.leagueReducer.league);
  const standings = state.standings[0].table;
  /*   const leagueState = useSelector((state) => state.leagueReducer.league);
  const teamNames = "atalantabc";
  const teamArr = leagueState.standings[0].table;
  const hello = () => {
    const teamNamesinStandings = teamArr.map((e) =>
      e.team.name.replace(/\s/g, "").toLowerCase()
    );
    console.log(teamNamesinStandings);
    var hey = teamNamesinStandings.find((teamName) => teamName == teamNames);
    console.log(hey);
  }; */
  let match = useRouteMatch();
  console.log(match);
  return (
    <Table celled>
      <Table.Header>
        <Table.Row>
          <Table.HeaderCell>#</Table.HeaderCell>
          <Table.HeaderCell>Club</Table.HeaderCell>
          <Table.HeaderCell>Matches</Table.HeaderCell>
          <Table.HeaderCell>W</Table.HeaderCell>
          <Table.HeaderCell>D</Table.HeaderCell>
          <Table.HeaderCell>L</Table.HeaderCell>
          <Table.HeaderCell>Goals For</Table.HeaderCell>
          <Table.HeaderCell>Goals Against</Table.HeaderCell>
          <Table.HeaderCell>Points</Table.HeaderCell>
        </Table.Row>
      </Table.Header>

      <Table.Body>
        {standings.map((teamStanding) => {
          return (
            <Table.Row key={teamStanding.team.id}>
              <Table.Cell>{teamStanding.position}</Table.Cell>
              <Table.Cell className="clubName">
                <Link
                  to={`/teams/${teamStanding.team.name
                    .replace(/\s/g, "")
                    .toLowerCase()}`}
                >
                  {teamStanding.team.name}
                </Link>
              </Table.Cell>
              <Table.Cell>{teamStanding.playedGames}</Table.Cell>
              <Table.Cell>{teamStanding.won}</Table.Cell>
              <Table.Cell>{teamStanding.draw}</Table.Cell>
              <Table.Cell>{teamStanding.lost}</Table.Cell>
              <Table.Cell>{teamStanding.goalsFor}</Table.Cell>
              <Table.Cell>{teamStanding.goalsAgainst}</Table.Cell>
              <Table.Cell>{teamStanding.points}</Table.Cell>
            </Table.Row>
          );
        })}
      </Table.Body>
    </Table>
  );
};

export default LeagueStandings;
