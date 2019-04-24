import * as types from '../actions/ActionTypes';

const initialState = {
    result: true
};

export default function result (state = initialState, action) {
    switch(action.type) {
        default:
            return state;
    }
}
