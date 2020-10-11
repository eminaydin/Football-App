import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Grid, Header, Image } from "semantic-ui-react";

const BasicTeamInformation = () => {
  const state = useSelector((state) => state.teamReducer.teamInfo);

  const findTheCoach = () => {
    let coach = state?.squad.find(({ role }) => role === "COACH").name;
    return coach;
  };
  return (
    <Grid columns={5} divided>
      <Grid.Row>
        <Grid.Column className="logoColumn">
          <Image src={state?.crestUrl} size="small" />
          <Header textAlign="center"> {state?.name}</Header>
        </Grid.Column>
        <Grid.Column verticalAlign="middle">
          <Header>Stadium</Header>
          <Header> {state?.venue}</Header>
        </Grid.Column>
        <Grid.Column verticalAlign="middle">
          <Header>Club Colors</Header>
          <Header> {state?.clubColors}</Header>
        </Grid.Column>
        <Grid.Column verticalAlign="middle">
          <Header>Coach</Header>
          <Header> {findTheCoach()}</Header>
        </Grid.Column>
        <Grid.Column verticalAlign="middle">
          <Header>Country</Header>
          <Header> {state?.area.name}</Header>
        </Grid.Column>
      </Grid.Row>
    </Grid>
  );
};

export default BasicTeamInformation;
