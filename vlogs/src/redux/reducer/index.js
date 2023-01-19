import { combineReducers } from "redux";
import { watchReducer} from "./watchReducer";



const reducers = combineReducers({
      allvideos: watchReducer,
 });



export default reducers;