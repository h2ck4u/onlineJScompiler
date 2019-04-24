import { combineReducers } from 'redux';
import quiz from './quiz';
import result from './result';
import compiler from './compiler';

const reducers = combineReducers({
    quiz, result, compiler
});

export default reducers;