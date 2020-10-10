import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchMatches } from "../helpers/fetchFunctions";
import { Segment, Image } from "semantic-ui-react";
const TeamView = (props) => {
  const dispatch = useDispatch();
  const teamArr = useSelector(
    (state) => state.leagueReducer.league.standings[0].table
  );
  const [teamId, setTeamId] = useState();
  useEffect(() => {
    setTeamId(findTheTeam());
    fetchMatches(teamId, dispatch);
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
    console.log(teamToDisplay.team.id);
    return teamToDisplay.team.id;
  };

  return <div className="photoContainer"></div>;
};

export default TeamView;
