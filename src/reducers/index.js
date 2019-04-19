import { combineReducers } from 'redux';
import container from './container';
import quiz from './quiz';

const reducers = combineReducers({
    container, quiz
});

export default reducers;