const initialState = {
  league: null,
  fixture: null,
  scorers: null,
};

const leagueReducer = (state = initialState, action) => {
  switch (action.type) {
    case "Fetch_League":
      return { ...state, league: action.payload };
    case "Fetch_Fixture":
      return { ...state, fixture: action.payload };

    case "Fetch_Scorers":
      return { ...state, scorers: action.payload };
    default:
      return state;
  }
};

export default leagueReducer;
