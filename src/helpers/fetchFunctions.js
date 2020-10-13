export const fetchByCountry = (country, dispatch) => {
  fetch(`http://api.football-data.org/v2/competitions/${country}/standings`, {
    headers: { "X-Auth-Token": "604b78a039154828b5a414079fc148a0" },
    url: "http://api.football-data.org/v2/matches?status='LIVE'",
    dataType: "json",
    type: "GET",
  })
    .then((res) => res.json())
    .then((data) => dispatch({ type: "Fetch_League", payload: data }));
};

export const fetchMatches = (teamId, dispatch) => {
  fetch(` https://api.football-data.org/v2/teams/${teamId}/matches`, {
    headers: { "X-Auth-Token": "604b78a039154828b5a414079fc148a0" },
    url: "http://api.football-data.org/v2/matches?status='LIVE'",
    dataType: "json",
    type: "GET",
  })
    .then((res) => res.json())
    .then((data) => dispatch({ type: "Team_Sent", payload: data }));
};

export const fetchTeam = (teamId, dispatch) => {
  fetch(` https://api.football-data.org/v2/teams/${teamId}`, {
    headers: { "X-Auth-Token": "604b78a039154828b5a414079fc148a0" },
    url: "http://api.football-data.org/v2/matches?status='LIVE'",
    dataType: "json",
    type: "GET",
  })
    .then((res) => res.json())
    .then((data) => dispatch({ type: "TeamInfo_Sent", payload: data }));
};

export const fetchFootballNews = (query, dispatch) => {
  fetch(
    `https://newsapi.org/v2/everything?q=${query}&language=en&apiKey=ca37133bec7645e0b6319c1c4d91ac34`
  )
    .then((res) => res.json())
    .then((data) =>
      dispatch({ type: "Football_News", payload: data.articles })
    );
};

export const fetchFixture = (league, dispatch) => {
  fetch(`https://api.football-data.org/v2/competitions/${league}/matches`, {
    headers: { "X-Auth-Token": "604b78a039154828b5a414079fc148a0" },
    url: "http://api.football-data.org/v2/matches?status='LIVE'",
    dataType: "json",
    type: "GET",
  })
    .then((res) => res.json())
    .then((data) => dispatch({ type: "Fetch_Fixture", payload: data.matches }));
};
