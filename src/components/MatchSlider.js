import React, { Fragment, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import HorizontalScroll from "react-scroll-horizontal";
import { Card, Grid, Image } from "semantic-ui-react";
import src from "../assets/football.jpg";
import { fetchFixture } from "../helpers/fetchFunctions";
const MatchSlider = () => {
  const state = useSelector((state) => state.leagueReducer.fixture);
  const dispatch = useDispatch();

  console.log(state);
  useEffect(() => {
    fetchFixture("PL", dispatch);
  }, []);
  return (
    <HorizontalScroll className="scoresDiv">
      <div className="scoresTeams">
        {state?.map((team) => {
          return (
            <Fragment>
              <div className="homeTeam">
                <div className="homeTeamLogo">
                  <img src="https://media03.tr.beinsports.com/img/teams/1/62.png" />
                </div>
                <div className="homeName"> {team.homeTeam.name}</div>
                <div className="homeScore">{team.score.fullTime.homeTeam}</div>
              </div>
              <div className="seperatorTeam">
                <div className="seperatorTeamLogo">
                  <img />
                </div>
                <div className="seperatorName"></div>
                <div className="seperatorScore"> : </div>
              </div>
              <div className="awayTeam">
                <div className="awayTeamLogo">
                  <img src="https://media03.tr.beinsports.com/img/teams/1/62.png" />
                </div>
                <div className="awayName">{team.awayTeam.name}</div>
                <div className="awayScore">{team.score.fullTime.awayTeam}</div>
              </div>
            </Fragment>
          );
        })}
        ;
      </div>
    </HorizontalScroll>
  );
};

export default MatchSlider;