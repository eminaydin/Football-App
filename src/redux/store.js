import { combineReducers, createStore } from "redux";
import leagueReducer from "./leagueReducer";
import teamReducer from "./teamReducer";
import newsReducer from "./newsReducer";

const reducers = combineReducers({
  newsReducer,
  leagueReducer,
  teamReducer,
});
const store = createStore(
  reducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
