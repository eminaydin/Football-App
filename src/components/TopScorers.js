import React from "react";
import { Header, Image, Table } from "semantic-ui-react";

const TopScorers = ({ leagueState }) => {
  const scorers = leagueState.scorers;
  return (
    <Table basic="very" celled collapsing>
      <Table.Header>
        <Table.Row>
          <Table.HeaderCell>#</Table.HeaderCell>
          <Table.HeaderCell>Player</Table.HeaderCell>
          <Table.HeaderCell>Goals</Table.HeaderCell>
        </Table.Row>
      </Table.Header>

      <Table.Body>
        {scorers?.scorers.map(({ numberOfGoals, player, team, index }) => {
          return (
            <Table.Row>
              <Table.Cell>{index}</Table.Cell>
              <Table.Cell>
                <Header as="h4" image>
                  <Image
                    src="https://react.semantic-ui.com/images/avatar/small/lena.png"
                    rounded
                    size="mini"
                  />
                  <Header.Content>
                    {player.name}
                    <Header.Subheader>{team.name}</Header.Subheader>
                  </Header.Content>
                </Header>
              </Table.Cell>
              <Table.Cell>{numberOfGoals}</Table.Cell>
            </Table.Row>
          );
        })}
      </Table.Body>
    </Table>
  );
};

export default TopScorers;
