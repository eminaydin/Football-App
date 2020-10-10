const initialState = {
  fixture: null,
};

const teamFixtureReducer = (state = initialState, action) => {
  console.log(state);
  switch (action.type) {
    case "Team Sent":
      return { fixture: action.payload };

    default:
      return state;
  }
};

export default teamFixtureReducer;
