import React from "react";
import Moment from "react-moment";
import { useSelector } from "react-redux";
import { Flag, Table, Image } from "semantic-ui-react";
import moment from "moment";

const TeamSquad = () => {
  const state = useSelector((state) => state.teamReducer.teamInfo);
  const players = state?.squad.filter((players) => players.position !== null);
  return (
    <Table celled selectable>
      <Table.Header>
        <Table.Row>
          <Table.HeaderCell>#</Table.HeaderCell>
          <Table.HeaderCell>Position</Table.HeaderCell>
          <Table.HeaderCell>Player</Table.HeaderCell>
          <Table.HeaderCell>Date Of Birth / Age</Table.HeaderCell>
          <Table.HeaderCell>Nationality</Table.HeaderCell>
        </Table.Row>
      </Table.Header>

      <Table.Body>
        {players?.map(
          ({ dateOfBirth, name, nationality, position, shirtNumber, id }) => {
            var formattedDate = moment(dateOfBirth).format("MMM D,YYYY");
            var age = moment().diff(dateOfBirth, "years");

            return (
              <Table.Row key={id}>
                <Table.Cell>{shirtNumber}</Table.Cell>
                <Table.Cell>{position}</Table.Cell>
                <Table.Cell>{name}</Table.Cell>
                <Table.Cell>
                  {formattedDate} ({age})
                </Table.Cell>
                <Table.Cell>
                  <Flag name={nationality.toLowerCase()} />
                </Table.Cell>
              </Table.Row>
            );
          }
        )}
      </Table.Body>
    </Table>
  );
};

export default TeamSquad;
