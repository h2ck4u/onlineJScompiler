import * as types from './ActionTypes';
import axios from "axios";

export function changeItem(target) {
    return {
        type: types.CHANGE_ITME,
        selectedIndex: target.selectedIndex
    };
}

export function handleClickResult(result) {
    console.log('setResult!!');
    return {
        type: types.HANDLE_CLICK_RESULT,
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

export function handleCodeMirrorChange(value) {
    return {
        type: types.HANDLE_CODEMIRROR_CHANGE,
        code: value
    };
}