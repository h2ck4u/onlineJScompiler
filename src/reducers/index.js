import { combineReducers } from 'redux';
import container from './container';
import quiz from './quiz';
import result from './result';

const reducers = combineReducers({
    container, quiz, result
});

export default reducers;