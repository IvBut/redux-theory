import {combineReducers} from "redux";
import counter2 from "./reducers/counter2";
import counter1 from "./reducers/counter1";


export default combineReducers({
    counter1, counter2
})

