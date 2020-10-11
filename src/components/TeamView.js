import React, { Fragment, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchMatches, fetchTeam } from "../helpers/fetchFunctions";
import BasicTeamInformation from "./BasicTeamInformation";
import NumericalInfo from "./NumericalInfo";
import TeamSquad from "./TeamSquad";
const TeamView = (props) => {
  const dispatch = useDispatch();
  const teamArr = useSelector(
    (state) => state.leagueReducer.league.standings[0].table
  );
  useEffect(() => {
    var teamId = findTheTeam();
    fetchMatches(teamId, dispatch);
    fetchTeam(teamId, dispatch);
  }, []);
  const findTheTeam = () => {
    const teamNames = props.match.params.teamName;
    const teamNamesinStandings = teamArr.map((e) =>
      e.team.name.replace(/\s/g, "").toLowerCase()
    );
    var findTheTeam = teamNamesinStandings.find(
      (teamName) => teamName == teamNames
    );
    let indexOfTheTeam = teamNamesinStandings.indexOf(findTheTeam);
    let teamToDisplay = teamArr[indexOfTheTeam];
    return teamToDisplay.team.id;
  };

  return (
    <Fragment>
      <div className="photoContainer"></div>
      <BasicTeamInformation />
      <NumericalInfo />
      <TeamSquad />
    </Fragment>
  );
};

export default TeamView;
