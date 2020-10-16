import React from "react";
import { Segment } from "semantic-ui-react";

const EntryMessage = () => {
  return (
    <Segment basic size="large" style={{ height: "100vh" }}>
      <h1 style={{ marginTop: "50%" }}>
        In order to have better user experience please switch to browser. I
        promise you won't regret.
      </h1>
    </Segment>
  );
};

export default EntryMessage;
