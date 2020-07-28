import { combineReducers } from 'redux';
import { userReducer, uiReducer,fundeeReducer } from './allReducers';
import { dataReducer } from './allReducers';

const rootreducer = combineReducers({
  user: userReducer,
  data: dataReducer,
  ui: uiReducer,
  fundee:fundeeReducer,
});

export default rootreducer;
