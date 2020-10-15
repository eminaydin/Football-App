import React from "react";
import { useSelector } from "react-redux";
import { Header, Segment } from "semantic-ui-react";
const NumericalInfo = () => {
  const state = useSelector((state) => state.teamReducer.teamInfo);
  const square = { width: 175, height: 175 };
  const squadLength = state?.squad?.filter(
    (players) => players.position !== null
  ).length;

  console.log(state);
  return (
    <Segment basic textAlign="center" style={{ textAlign: "-webkit-center" }}>
      <Segment circular style={square}>
        <Header as="h2">
          Founded
          <Header.Subheader>{state?.founded}</Header.Subheader>
        </Header>
      </Segment>
      <Segment circular style={square}>
        <Header as="h2">
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
