import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Flag, Header, Table } from "semantic-ui-react";
import { fetchByCountry } from "../helpers/fetchFunctions";

const CountriesTable = () => {
  const reduxState = useSelector(
    (state) => state.topCountriesReducer.topCountries
  );
  const dispatch = useDispatch();
  useEffect(() => {
    reduxState.length <= 0 &&
      fetchByCountry(["PL", "BL1", "SA", "PD", "FL1"], dispatch);
  }, [dispatch, reduxState.length]);
  return (
    <Table basic="very" celled collapsing>
      <Table.Header>
        <Table.Row>
          <Table.HeaderCell>Countries</Table.HeaderCell>
          <Table.HeaderCell>Teams</Table.HeaderCell>
        </Table.Row>
      </Table.Header>

      <Table.Body>
        {reduxState.map((country, index) => {
          const countryName = country.competition.area.name;
          return (
            <Table.Row
              className="tableRow"
              onClick={() =>
                dispatch({ type: "League Sent", payload: country })
              }
              key={country.competition.area.id}
            >
              <Table.Cell>
                <Header as="h4" image>
                  <Flag
                    name={
                      countryName === "England"
                        ? "gb eng"
                        : countryName === "France"
                        ? "fr"
                        : countryName === "Germany"
                        ? "de"
                        : countryName === "Italy"
                        ? "it"
                        : countryName === "Spain"
                        ? "es"
                        : null
                    }
                  />
                  <Header.Content>
                    {country?.competition?.name}
                    <Header.Subheader>Human Resources</Header.Subheader>
                  </Header.Content>
                </Header>
              </Table.Cell>
              <Table.Cell>{country?.standings[0].table.length}</Table.Cell>
            </Table.Row>
          );
        })}
      </Table.Body>
    </Table>
  );
};

export default CountriesTable;
