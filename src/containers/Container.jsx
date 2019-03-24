import React, {Component} from 'react';
import Quiz from '../components/Quiz';
import Result from '../components/Result';
import Compiler from '../components/Compiler';
import TestCase from '../components/TestCase';
import QuizData from '../../Quiz.json';

class Container extends Component {
    constructor(props) {
        super(props);

        this.itemChange = (dataFromChild) => {
            const target = dataFromChild.currentTarget;
            const selected = target.selectedOptions[0];
            const title = selected.value;
            this.setState({
                quiz: {
                        title: title,
                        quiz: this.state.quizList[title].quiz
                }
            });
        }

        this.setQuizList = () => {
            let quizList = {};
            QuizData.forEach(data => {
                let title = data.title;
                quizList[title] = {
                    title: title,
                    quiz: data.quiz
                };
            });

            this.setState({
                quiz: {
                    title: quizList["공배수의 합"].title,
                    quiz: quizList["공배수의 합"].quiz
                },
                quizList: quizList,
                titles: Object.keys(quizList)
            });
        }
    }

    componentWillMount() {
        this.setQuizList();
    }

    render() {
        return (
        <div className = "main-section">
            <div>
                <Quiz 
                    titles = { this.state.titles }
                    quiz = { this.state.quiz.quiz }
                    callbackItemChange = { this.itemChange }/>
            </div>
            <div className = "run-section">
                <Compiler/>
                <Result/>
            </div>
            <div>
                <TestCase/>
            </div>
        </div>
        );
    }
}

export default Container;