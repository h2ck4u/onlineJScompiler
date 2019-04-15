import * as types from '../actions/ActionTypes';

const initialState = {
    selectedKey: 0,
    code: '',
    result: '',
    quiz: {},
    titleList: [],
    quizList: []
};

/**
 * 
 quiz: {
    title: state.titleList[selectedKey],
    quiz: state.quizList[selectedKey]
 }
 */
export default function container (state = initialState, action) {
    console.log(state);
    switch(action.type) {
        case types.CHANGE_ITME:
            return { ...state, 
                selectedKey: state.selectedKey
            };
        case types.SET_QUIZLIST:
            return {};
        default:
            return state;
    }
}