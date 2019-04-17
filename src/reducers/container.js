import * as types from '../actions/ActionTypes';
import QuizData from '../../Quiz.json';

const initialState = {
    selectedIndex: 0,
    code: '',
    result: '',
    quiz: {
        title: QuizData[0].title,
        quiz: QuizData[0].quiz
    },
    titleList: QuizData.map(quiz => quiz.title),
    quizList: QuizData.map(quiz => quiz.quiz)
};

export default function container (state = initialState, action) {
    switch(action.type) {
        case types.CHANGE_ITME:
            return { ...state, 
                selectedIndex: action.selectedIndex
            };
        case types.SET_QUIZLIST:
            return {};
        default:
            return state;
    }
}