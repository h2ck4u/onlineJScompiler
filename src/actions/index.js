import * as types from './ActionTypes';
import axios from "axios";

export function changeItem(target) {
    return {
        type: types.CHANGE_ITME,
        selectedIndex: target.selectedIndex
    };
}

export function setQuizList() {
    return {
        type: types.SET_QUIZLIST
    };
}

export function runCode(code) {
    return {
        type: types.RUN_CODE,
        code: code
    };
}

export function handleClickResult(result) {
    console.log('setResult!!');
    return {
        type: types.SET_RESULT,
        result: result,
        payload: axios.post('/run', {
            lang: 'javascript',
            code: '',
            selectedQuiz: 0
        },).then(response => {
            console.log(response);
        }).catch(error => {
            console.log(error);
        })
    };
}