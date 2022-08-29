import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import { legacy_createStore as createStore, applyMiddleware, combineReducers } from 'redux';
import dataReducer from './reducer/reducers';

const reducer = combineReducers({ dataReducer });
const store = createStore(
  reducer, composeWithDevTools(
    applyMiddleware(thunk),
  ),
);

export default store;
