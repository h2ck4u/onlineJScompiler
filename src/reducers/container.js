import * as types from '../actions/ActionTypes';
import QuizData from '../../Quiz.json';

const initialState = {
    selectedKey: 0,
    code: '',
    result: '',
    quiz: {
        title: QuizData[0].title,
        quiz: QuizData[0].quiz
    }
};


/**
 * 
 quiz: {
    title: state.titleList[selectedKey],
    quiz: state.quizList[selectedKey]
 }
 */
export default function container (state = initialState, action) {
    switch(action.type) {
        case types.CHANGE_ITME:
            return { ...state, 
                selectedKey: state.selectedKey + 1
            };
        case types.SET_QUIZLIST:
            return {};
        default:
            return state;
    }
}