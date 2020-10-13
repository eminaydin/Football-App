const initialState = {
  fixture: null,
  teamInfo: null,
};

const teamReducer = (state = initialState, action) => {
  switch (action.type) {
    case "Team_Sent":
      return { ...state, fixture: action.payload };
    case "TeamInfo_Sent":
      return { ...state, teamInfo: action.payload };
    default:
      return state;
  }
};

export default teamReducer;
