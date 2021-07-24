import { createStore, applyMiddleware, compose } from 'redux'
import { userReducer } from './reducers/userReducer'
import thunk from 'redux-thunk'
 
const reduxPlugin = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();
const composedEnhancers = compose(applyMiddleware(thunk), reduxPlugin)

//Undefined below will be the initial state of the store (update it if needed)
const store = createStore(userReducer, undefined, composedEnhancers)


export default store




//Undefined below will be the initial state of the store (update it if needed)