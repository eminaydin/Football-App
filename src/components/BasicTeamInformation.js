import React from "react";
import { Grid } from "semantic-ui-react";

const BasicTeamInformation = () => {
  return (
    <Grid columns={3} divided>
      <Grid.Row>
        <Grid.Column>
          <Image src="/images/wireframe/media-paragraph.png" />
        </Grid.Column>
        <Grid.Column>
          <Image src="/images/wireframe/media-paragraph.png" />
        </Grid.Column>
        <Grid.Column>
          <Image src="/images/wireframe/media-paragraph.png" />
        </Grid.Column>
      </Grid.Row>

      <Grid.Row>
        <Grid.Column>
          <Image src="/images/wireframe/media-paragraph.png" />
        </Grid.Column>
        <Grid.Column>
          <Image src="/images/wireframe/media-paragraph.png" />
        </Grid.Column>
        <Grid.Column>
          <Image src="/images/wireframe/media-paragraph.png" />
        </Grid.Column>
      </Grid.Row>
    </Grid>
  );
};

export default BasicTeamInformation;
