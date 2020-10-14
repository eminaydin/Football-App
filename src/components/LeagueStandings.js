import React from "react";
import { Link } from "react-router-dom";
import { Image, Table } from "semantic-ui-react";
const LeagueStandings = ({ leagueState }) => {
  const standings = leagueState?.league?.standings[0].table;
  return (
    <Table celled selectable>
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
        {standings?.map((teamStanding) => {
          return (
            <Table.Row key={teamStanding.team.id}>
              <Table.Cell>{teamStanding.position}</Table.Cell>
              <Table.Cell className="clubName">
                <Image src={teamStanding.team.crestUrl} inline size="mini" />
                <Link
                  to={`/teams/${teamStanding.team.name
                    .replace(/\s/g, "")
                    .toLowerCase()}`}
                >
                  <span> {teamStanding.team.name}</span>
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
