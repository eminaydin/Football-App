const initialState = {
  league: null,
};

const topCountriesReducer = (state = initialState, action) => {
  switch (action.type) {
    case "League Sent":
      return { league: action.payload };

    default:
      return state;
  }
};

export default topCountriesReducer;
