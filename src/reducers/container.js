import * as types from '../actions/ActionTypes';

const initialState = {
    selectedKey: 0,
    code: '',
    result: '',
    quiz: {}
};

export default function container (state = initialState, action) {
    console.log(state);
    switch(action.type) {
        case types.CHANGE_ITME:
            const selectedKey = action.data.selectedIndex;
            console.log('reducers_container', action.data.target);
            return { ...state, 
                selectedKey: selectedKey,
                quiz: {
                    title: this.state.titleList[selectedKey],
                    quiz: this.state.quizList[selectedKey]
                }
            };
        case types.SET_QUIZLIST:
            return {};
        default:
            return state;
    }
}