import * as types from '../actions/ActionTypes';

const initialState = {
    code: 'function solution(input) { \r\treturn; \r}'
};

export default function compiler (state = initialState, action) {
    switch(action.type) {
        case types.HANDLE_CODEMIRROR_CHANGE:
            return { ...state, code: action.code.getValue() };
        default:
            return state;
    }
}
