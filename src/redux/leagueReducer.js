const initialState = {
  league: null,
  fixture: null,
};

const leagueReducer = (state = initialState, action) => {
  switch (action.type) {
    case "Fetch_League":
      return { ...state, league: action.payload };
    case "Fetch_Fixture":
      return { ...state, fixture: action.payload };

    default:
      return state;
  }
};

export default leagueReducer;
