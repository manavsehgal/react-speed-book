import { combineReducers } from 'redux';
import * as reducers from './roadmap';

const roadmapApp = combineReducers(reducers);
export default roadmapApp;
