import * as types from '../actions/ActionTypes';
import QuizData from '../../Quiz.json';

const quizList = QuizData.map(quiz => quiz.quiz);

const initialState = {
    titleList: QuizData.map(quiz => quiz.title),
    selectedQuiz: quizList[0],
};

export default function quiz (state = initialState, action) {
    switch(action.type) {
        case types.CHANGE_ITME:
            return { ...state, 
                selectedQuiz: quizList[action.selectedIndex]
            };
        default:
            return state;
    }
}
