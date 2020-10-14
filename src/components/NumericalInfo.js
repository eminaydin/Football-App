import React from "react";
import { Header, Segment } from "semantic-ui-react";
const NumericalInfo = ({ teamState }) => {
  const state = teamState?.teamInfo;
  const square = { width: 175, height: 175 };
  const squadLength = state?.squad.filter(
    (players) => players.position !== null
  ).length;

  return (
    <Segment basic textAlign="center" style={{ textAlign: "-webkit-center" }}>
      <Segment circular style={square}>
        <Header as="h2">
          Founded
          <Header.Subheader>{state?.founded}</Header.Subheader>
        </Header>
      </Segment>
      <Segment circular inverted style={square}>
        <Header as="h2" inverted>
          Players
          <Header.Subheader>{squadLength}</Header.Subheader>
        </Header>
      </Segment>
      <Segment circular style={square}>
        <Header as="h2">
          Competitions
          <Header.Subheader>
            {state?.activeCompetitions.length}
          </Header.Subheader>
        </Header>
      </Segment>
    </Segment>
  );
};

export default NumericalInfo;
