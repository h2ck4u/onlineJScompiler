import * as types from '../actions/ActionTypes';

const initialState = {
    result: true
};

export default function quiz (state = initialState, action) {
    switch(action.type) {
        case types.HANDLE_CLICK_RESULT:
            // console.log('reducer!!', action);
            return { ...state, result: action.result };
        default:
            return state;
    }
}
