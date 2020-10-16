import React, { useEffect, useState } from "react";
import { Header, Image, Segment, Table } from "semantic-ui-react";

const TopScorers = ({ leagueState }) => {
  const scorers = leagueState.scorers;
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    scorers?.scorers?.length > 0 && setLoading(false);
  }, [scorers]);
  return (
    <Segment basic loading={loading}>
      <Table basic="very" celled collapsing>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>Player</Table.HeaderCell>
            <Table.HeaderCell>Goals</Table.HeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body>
          {scorers?.scorers?.map(({ numberOfGoals, player, team }) => {
            let teamId = team.id;
            let teamLogo = leagueState?.league?.standings[0].table?.find(
              (club) => club.team.id === teamId
            )?.team.crestUrl;
            return (
              <Table.Row key={player.id}>
                <Table.Cell>
                  <Header as="h4" image>
                    <Image src={teamLogo} rounded size="mini" />
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
    </Segment>
  );
};

export default TopScorers;
