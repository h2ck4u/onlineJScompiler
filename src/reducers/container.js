import * as types from '../actions/ActionTypes';

const initialState = {
    code: '',
    result: ''
};

export default function container (state = initialState, action) {
    switch(action.type) {
        case types.RUN_CODE:
            return {...state,
                code: action.code
            };
        default:
            return state;
    }
}