import { combineReducers } from 'redux'
import loginFormReducer from '../containers/LoginForm/LoginForm.reducer'
import privateRouteReducer from '../containers/PrivateRoute/PrivateRoute.reducer'

const rootReducer = combineReducers({ loginFormReducer, privateRouteReducer })

export default rootReducer
