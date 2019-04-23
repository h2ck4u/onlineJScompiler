import * as types from '../actions/ActionTypes';

const initialState = {
    result: true
};

export default function quiz (state = initialState, action) {
    switch(action.type) {
        case types.SET_RESULT:
            console.log('reducer!!');
            return { ...state, result: action.result };
        default:
            return state;
    }
}
