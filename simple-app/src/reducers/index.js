import { combineReducers } from "redux";
import animeReducer from "./anime";

export default combineReducers({
  anime: animeReducer,
});
