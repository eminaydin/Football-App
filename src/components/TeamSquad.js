import React from "react";
import { useSelector } from "react-redux";
import { Flag, Table } from "semantic-ui-react";
import moment from "moment";

const TeamSquad = () => {
  const state = useSelector((state) => state.teamReducer.teamInfo);
  const players = state?.squad.filter((players) => players.position !== null);
  return (
    <Table celled selectable basic>
      <Table.Header>
        <Table.Row>
          <Table.HeaderCell>Position</Table.HeaderCell>
          <Table.HeaderCell>Player</Table.HeaderCell>
          <Table.HeaderCell>Date Of Birth / Age</Table.HeaderCell>
          <Table.HeaderCell>Nationality</Table.HeaderCell>
        </Table.Row>
      </Table.Header>

      <Table.Body>
        {players?.map(({ dateOfBirth, name, nationality, position, id }) => {
          var formattedDate = moment(dateOfBirth).format("MMM D,YYYY");
          var age = moment().diff(dateOfBirth, "years");

          return (
            <Table.Row key={id}>
              <Table.Cell>{position}</Table.Cell>
              <Table.Cell>{name}</Table.Cell>
              <Table.Cell>
                {formattedDate} ({age})
              </Table.Cell>
              <Table.Cell>
                <Flag
                  name={
                    nationality.toLowerCase() === "côte d’ivoire"
                      ? "cote divoire"
                      : nationality.toLowerCase() === "north macedonia"
                      ? "macedonia"
                      : nationality.toLowerCase() === "bosnia and herzegovina"
                      ? "bosnia"
                      : nationality.toLowerCase() === "northern ireland"
                      ? "ireland"
                      : nationality.toLowerCase() === `korea republic`
                      ? "south korea"
                      : nationality.toLowerCase()
                  }
                />
              </Table.Cell>
            </Table.Row>
          );
        })}
      </Table.Body>
    </Table>
  );
};

export default TeamSquad;
