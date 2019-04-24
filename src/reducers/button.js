import * as types from '../actions/ActionTypes';

export default function button (state = initialState, action) {
    switch(action.type) {
        case types.HANDLE_CLICK_RESULT:
            console.log('reducer!!', action);
            return { ...state, result: true };
        default:
            return state;
    }
}
