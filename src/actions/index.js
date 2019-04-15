import * as types from './ActionTypes';

export function changeItem(data) {
    return {
        type: types.CHANGE_ITME,
        data: data
    };
}

export function setQuizList() {
    return {
        type: types.SET_QUIZLIST
    };
}