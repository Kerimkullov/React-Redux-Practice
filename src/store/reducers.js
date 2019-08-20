
import { combineReducers } from "redux";
import {authReducer} from './Auth/reducers'
import {registrationReducer} from './Registration/reducers'
import {  localizeReducer } from "react-localize-redux";

export default combineReducers({
    auth: authReducer,
    registration: registrationReducer,
     localize: localizeReducer
})

