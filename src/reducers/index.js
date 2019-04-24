import { combineReducers } from 'redux';
import quiz from './quiz';
import result from './result';
import compiler from './compiler';
import button from './button';

const reducers = combineReducers({
    quiz, result, compiler, button
});

export default reducers;