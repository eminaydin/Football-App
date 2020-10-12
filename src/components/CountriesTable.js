import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Flag, Header, Placeholder, Table } from "semantic-ui-react";
import { fetchByCountry } from "../helpers/fetchFunctions";
import LoadingPlaceholder from "./LoadingPlaceholder";

const CountriesTable = () => {
  const reduxState = useSelector(
    (state) => state.topCountriesReducer.topCountries
  );
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  useEffect(() => {
    setLoading(true);
    reduxState.length <= 0 &&
      fetchByCountry(["PL", "BL1", "SA", "PD", "FL1"], dispatch);
    reduxState.length > 0 &&
      setTimeout(() => {
        setLoading(false);
      }, 400);
  }, [dispatch, reduxState.length]);
  return loading ? (
    <LoadingPlaceholder />
  ) : (
    <Table basic="very" celled collapsing>
      <Table.Header>
        <Table.Row>
          <Table.HeaderCell>Countries</Table.HeaderCell>
          <Table.HeaderCell>Teams</Table.HeaderCell>
        </Table.Row>
      </Table.Header>

      <Table.Body>
        {reduxState.map((country) => {
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
                  <Header.Content>{country?.competition?.name}</Header.Content>
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
