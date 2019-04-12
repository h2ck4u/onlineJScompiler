import * as types from '../actions/ActionTypes';

const initialState = {

};

export default function container (state = initialState, action) {
    switch(action.type) {
        case types.CHANGE_ITME:
            return {};
        case types.SET_QUIZLIST:
            return {};
        default:
            return state;
    }
}