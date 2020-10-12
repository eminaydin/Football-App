const initState = {
  generalNews: null,
};

const newsReducer = (state = initState, action) => {
  switch (action.type) {
    case "Football_News":
      return { ...state, generalNews: action.payload };
    default:
      return state;
  }
};
export default newsReducer;
