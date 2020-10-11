const initialState = {
  fixture: null,
  teamInfo: null,
};

const teamReducer = (state = initialState, action) => {
  switch (action.type) {
    case "Team Sent":
      return { ...state, fixture: action.payload };
    case "TeamInfo Sent":
      return { ...state, teamInfo: action.payload };
    default:
      return state;
  }
};

export default teamReducer;
