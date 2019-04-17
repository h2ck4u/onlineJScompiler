import * as types from './ActionTypes';

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