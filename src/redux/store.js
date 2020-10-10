import { combineReducers, createStore } from "redux";
import topCountriesReducer from "./topCountriesReducer";
import leagueReducer from "./leaugueReducer";
import teamFixtureReducer from "./teamFixtureReducer";
const reducers = combineReducers({
  topCountriesReducer,
  leagueReducer,
  teamFixtureReducer,
});
const store = createStore(
  reducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
