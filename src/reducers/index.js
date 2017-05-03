// Set up your root reducer here...
 import { combineReducers } from 'redux';


 import { routerStateReducer } from 'redux-react-router';
 import { reducer as formReducer } from 'redux-form';

 const appReducer = combineReducers({
  form:                   formReducer
 });


 export default appReducer;
