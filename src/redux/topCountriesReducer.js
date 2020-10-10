const initialState = {
  topCountries: [],
};

const topCountriesReducer = (state = initialState, action) => {
  switch (action.type) {
    case "Top Countries":
      return {
        ...state,
        topCountries: [...state.topCountries, action.payload],
      };

    default:
      return state;
  }
};

export default topCountriesReducer;
