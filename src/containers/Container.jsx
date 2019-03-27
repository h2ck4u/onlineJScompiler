import React, {Component} from 'react';
import Quiz from '../components/Quiz';
import Result from '../components/Result';
import Compiler from '../components/Compiler';
import TestCase from '../components/TestCase';
import Button from '../components/Button';
import QuizData from '../../Quiz.json';

class Container extends Component {
    constructor(props) {
        super(props);

        this.state = {
            selectedKey: 0,
            quiz: {}
        };

        this.handleChange = this.handleChange.bind(this);
        this.itemChange = this.itemChange.bind(this);
        this.setQuizList = this.setQuizList.bind(this);
    }

    handleChange(e) {
        this.setState({
            keyword: e.target.value
        });
    }

    itemChange = (dataFromChild) => {
        const selectedKey = dataFromChild.target.selectedIndex;
        console.log(selectedKey);
        this.setState({
            selectedKey: selectedKey,
            quiz: {
                title: this.state.titleList[selectedKey],
                quiz: this.state.quizList[selectedKey]
            }
        });
    }

    setQuizList = () => {
        this.setState({
            titleList: QuizData.map(quiz => quiz.title),
            quizList: QuizData.map(quiz => quiz.quiz)
        });
    }

    componentWillMount() {
        this.setQuizList();
    }

    render() {
        return (
        <div className = "main-section">
            <div>
                <Quiz 
                    titleList = { this.state.titleList }
                    selectedQuiz = { this.state.quizList[this.state.selectedKey] }
                    callbackItemChange = { this.itemChange }/>
            </div>
            <div className = "run-section">
                <Compiler/>
                <Result/>
            </div>
            <div>
                {/* <TestCase/> */}
                <Button></Button>
            </div>
        </div>
        );
    }
}

export default Container;