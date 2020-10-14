import React, { Fragment, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchMatches, fetchTeam } from "../helpers/fetchFunctions";
import BasicTeamInformation from "./BasicTeamInformation";
import NumericalInfo from "./NumericalInfo";
import NextMatch from "./NextMatch";
import TeamSquad from "./TeamSquad";
const TeamView = (props) => {
  const dispatch = useDispatch();
  const teamInfo = useSelector(
    (state) => state.leagueReducer.league.standings[0].table
  );
  const teamNames = props.match.params.teamName;

  useEffect(() => {
    const findTheTeam = () => {
      const teamNamesinStandings = teamInfo.map((e) =>
        e.team.name.replace(/\s/g, "").toLowerCase()
      );
      var findTheTeam = teamNamesinStandings.find(
        (teamName) => teamName === teamNames
      );
      let indexOfTheTeam = teamNamesinStandings.indexOf(findTheTeam);
      let teamToDisplay = teamInfo[indexOfTheTeam];
      return teamToDisplay.team.id;
    };
    fetchMatches(findTheTeam(), dispatch);
    fetchTeam(findTheTeam(), dispatch);
  }, [dispatch, teamNames, teamInfo]);

  return (
    <Fragment>
      <NextMatch teamInfo={teamInfo} />
      <BasicTeamInformation />
      <NumericalInfo />
      <TeamSquad />
    </Fragment>
  );
};

export default TeamView;
