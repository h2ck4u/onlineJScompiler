import * as types from '../actions/ActionTypes';

const initialState = {
    result: true
};

export default function button (state = initialState, action) {
    switch(action.type) {
        case types.HANDLE_CLICK_RESULT:
            return { ...state, result: action.result };
        default:
            return state;
    }
}
