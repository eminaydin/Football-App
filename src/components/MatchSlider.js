import React, { Fragment } from "react";
import HorizontalScroll from "react-scroll-horizontal";

const MatchSlider = ({ leagueState }) => {
  const fixture = leagueState?.fixture;
  const standings = leagueState?.league?.standings[0]?.table;

  return (
    <HorizontalScroll className="scoresDiv">
      <div className="scoresTeams">
        {console.log()}
        {standings != null &&
          fixture
            ?.filter((e) => e.score.fullTime.homeTeam !== null)
            .map((match) => {
              let homeTeam = standings?.find(
                (club) => club.team.id === match.homeTeam.id
              );
              let awayTeam = standings?.find(
                (club) => club.team.id === match.awayTeam.id
              );
              /*      console.log(homeTeam);
            console.log(awayTeam); */
              return (
                <Fragment>
                  <div className="homeTeam">
                    <div className="homeTeamLogo">
                      <img src={homeTeam?.team?.crestUrl} />
                    </div>
                    <div className="homeScore">
                      {match.score.fullTime.homeTeam}
                    </div>
                  </div>
                  <div className="awayTeam">
                    <div className="awayTeamLogo">
                      <img src={awayTeam?.team?.crestUrl} />
                    </div>
                    <div className="awayScore">
                      {match.score.fullTime.awayTeam}
                    </div>
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
