import * as types from '../actions/ActionTypes';

const initialState = {
    selectedKey: 0,
    code: '',
    result: '',
    quiz: {}
};

export default function container (state = initialState, action) {
    switch(action.type) {
        case types.CHANGE_ITME:
            return { ...state, quiz: state.quiz};
        case types.SET_QUIZLIST:
            return {};
        default:
            return state;
    }
}