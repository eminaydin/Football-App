export const fetchByCountry = (countries, dispatch) => {
  for (let index = 0; index < countries.length; index++) {
    fetch(
      `http://api.football-data.org/v2/competitions/${countries[index]}/standings`,
      {
        headers: { "X-Auth-Token": "604b78a039154828b5a414079fc148a0" },
        url: "http://api.football-data.org/v2/matches?status='LIVE'",
        dataType: "json",
        type: "GET",
      }
    )
      .then((res) => res.json())
      .then((data) => dispatch({ type: "Top Countries", payload: data }));
  }
};

export const fetchMatches = (teamId, dispatch) => {
  fetch(` https://api.football-data.org/v2/teams/${teamId}/matches`, {
    headers: { "X-Auth-Token": "604b78a039154828b5a414079fc148a0" },
    url: "http://api.football-data.org/v2/matches?status='LIVE'",
    dataType: "json",
    type: "GET",
  })
    .then((res) => res.json())
    .then((data) => dispatch({ type: "Team Sent", payload: data }));
};

export const fetchTeam = (teamId, dispatch) => {
  fetch(` https://api.football-data.org/v2/teams/${teamId}`, {
    headers: { "X-Auth-Token": "604b78a039154828b5a414079fc148a0" },
    url: "http://api.football-data.org/v2/matches?status='LIVE'",
    dataType: "json",
    type: "GET",
  })
    .then((res) => res.json())
    .then((data) => dispatch({ type: "TeamInfo Sent", payload: data }));
};
