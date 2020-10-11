import { combineReducers, createStore } from "redux";
import topCountriesReducer from "./topCountriesReducer";
import leagueReducer from "./leaugueReducer";
import teamReducer from "./teamReducer";
const reducers = combineReducers({
  topCountriesReducer,
  leagueReducer,
  teamReducer,
});
const store = createStore(
  reducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
