import React from "react";
import { useSelector } from "react-redux";
import { Divider, Grid, Image, Segment } from "semantic-ui-react";
import CountriesTable from "./CountriesTable";
import MapChart from "./MapChart";

const Leagues = () => {
  return (
    <Segment>
      <Grid columns={2} relaxed="very">
        <Grid.Column>
          <CountriesTable />
        </Grid.Column>
        <Grid.Column>
          <MapChart />
        </Grid.Column>
      </Grid>
      <Divider hidden vertical />
    </Segment>
  );
};

export default Leagues;
