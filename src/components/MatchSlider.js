import React, { Fragment, useEffect, useState } from "react";
import HorizontalScroll from "react-scroll-horizontal";
import { Segment } from "semantic-ui-react";

const MatchSlider = ({ leagueState }) => {
  const fixture = leagueState?.fixture;
  const standings = leagueState?.league?.standings[0]?.table;
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    fixture?.length > 0 && setLoading(false);
  }, [fixture]);
  return (
    <Segment basic loading={loading}>
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
                      <div className="homeScore" style={{ color: "#c91116" }}>
                        {match.score.fullTime.homeTeam}
                      </div>
                    </div>
                    <div className="awayTeam">
                      <div className="awayTeamLogo">
                        <img src={awayTeam?.team?.crestUrl} />
                      </div>
                      <div className="awayScore" style={{ color: "#c91116" }}>
                        {match.score.fullTime.awayTeam}
                      </div>
                    </div>
                  </Fragment>
                );
              })}
          ;
        </div>
      </HorizontalScroll>
    </Segment>
  );
};

export default MatchSlider;
