export const fetchByCountry = (country, dispatch) => {
  fetch(`https://api.football-data.org/v2/competitions/${country}/standings`, {
    headers: { "X-Auth-Token": "604b78a039154828b5a414079fc148a0" },
    url: "http://api.football-data.org/v2/matches?status='LIVE'",
    dataType: "json",
    type: "GET",
  })
    .then((res) => res.json())
    .then((data) => dispatch({ type: "Fetch_League", payload: data }))
    .catch((error) => console.log(error));
};

export const fetchMatches = (teamId, dispatch) => {
  fetch(` https://api.football-data.org/v2/teams/${teamId}/matches`, {
    headers: { "X-Auth-Token": "604b78a039154828b5a414079fc148a0" },
    url: "http://api.football-data.org/v2/matches?status='LIVE'",
    dataType: "json",
    type: "GET",
  })
    .then((res) => res.json())
    .then((data) => dispatch({ type: "Team_Sent", payload: data }))
    .catch((error) => console.log(error));
};

export const fetchTeam = (teamId, dispatch) => {
  fetch(` https://api.football-data.org/v2/teams/${teamId}`, {
    headers: { "X-Auth-Token": "604b78a039154828b5a414079fc148a0" },
    url: "http://api.football-data.org/v2/matches?status='LIVE'",
    dataType: "json",
    type: "GET",
  })
    .then((res) => res.json())
    .then((data) => dispatch({ type: "TeamInfo_Sent", payload: data }))
    .catch((error) => console.log(error));
};

export const fetchFootballNews = (query, dispatch) => {
  fetch(
    `https://gnews.io/api/v4/search?q=${query}&token=ff5c0ec77caa7129fc153d9c6a2171f3`
  )
    .then((res) => res.json())
    .then((data) => dispatch({ type: "Football_News", payload: data.articles }))
    .catch((error) => console.log(error));
};

export const fetchFixture = (league, dispatch) => {
  fetch(`https://api.football-data.org/v2/competitions/${league}/matches`, {
    headers: { "X-Auth-Token": "604b78a039154828b5a414079fc148a0" },
    url: "http://api.football-data.org/v2/matches?status='LIVE'",
    dataType: "json",
    type: "GET",
  })
    .then((res) => res.json())
    .then((data) => dispatch({ type: "Fetch_Fixture", payload: data.matches }))
    .catch((error) => console.log(error));
};

export const fetchTopScorers = (league, dispatch) => {
  fetch(`https://api.football-data.org/v2/competitions/${league}/scorers`, {
    headers: { "X-Auth-Token": "604b78a039154828b5a414079fc148a0" },
    url: "http://api.football-data.org/v2/matches?status='LIVE'",
    dataType: "json",
    type: "GET",
  })
    .then((res) => res.json())
    .then((data) => dispatch({ type: "Fetch_Scorers", payload: data }))
    .catch((error) => console.log(error));
};
