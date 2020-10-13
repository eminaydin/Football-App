const initialState = {
  league: null,
  fixture: null,
};

const topCountriesReducer = (state = initialState, action) => {
  switch (action.type) {
    case "League Sent":
      return { league: action.payload };
    case "Fetch_Fixture":
      return { fixture: action.payload };

    default:
      return state;
  }
};

export default topCountriesReducer;
