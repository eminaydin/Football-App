const initialState = {
  league: null,
  fixture: null,
  scorers: null,
  loading: true,
};

const leagueReducer = (state = initialState, action) => {
  console.log(state.loading);
  switch (action.type) {
    case "Fetch_League":
      return { ...state, league: action.payload };
    case "Fetch_Fixture":
      return { ...state, fixture: action.payload };
    case "Fetch_Scorers":
      return { ...state, scorers: action.payload };
    case "Set_Loading":
      return { ...state, loading: action.payload };
    default:
      return state;
  }
};

export default leagueReducer;
