import * as types from './ActionTypes';
import axios from "axios";

export function changeItem(target) {
    return {
        type: types.CHANGE_ITME,
        selectedIndex: target.selectedIndex
    };
}

export function handleClickResult(code) {
    return {
        type: types.HANDLE_CLICK_RESULT,
        payload: axios.post('/run', {
            lang: 'javascript',
            code: code,
            selectedQuiz: 0
        }).then(response => {
            console.log(response.data.result);
        }).catch(error => {
            console.log(error);
        }),
    };
}

export function handleCodeMirrorChange(value) {
    return {
        type: types.HANDLE_CODEMIRROR_CHANGE,
        code: value
    };
}