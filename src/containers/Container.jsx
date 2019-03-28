import React, {Component} from 'react';
import Quiz from '../components/Quiz';
import Result from '../components/Result';
import Compiler from '../components/Compiler';
import TestCase from '../components/TestCase';
import Button from '../components/Button';
import QuizData from '../../Quiz.json';

export default class Container extends Component {
    constructor(props) {
        super(props);

        this.state = {
            selectedKey: 0,
            code: '',
            result: '',
            quiz: {}
        };

        this.handleChange = this.handleChange.bind(this);
        this.itemChange = this.itemChange.bind(this);
        this.setQuizList = this.setQuizList.bind(this);
        this.handleClick = this.handleClick.bind(this);
        this.handleCodeMirrorChange = this.handleCodeMirrorChange.bind(this);
    }

    handleClick(e) {
        let resultMsg = '정답이 아닙니다.'
        if (e.data.result) {
            resultMsg = '정답입니다.'
        }
        this.setState({
            result: resultMsg
        });
    }

    handleChange(e) {
        this.setState({
            keyword: e.target.value
        });
    }

    handleCodeMirrorChange(value) {
        this.setState({
            code: value
        })
    }

    itemChange = (dataFromChild) => {
        const selectedKey = dataFromChild.target.selectedIndex;
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
                    callbackItemChange = { this.itemChange } />
            </div>
            <div className = "run-section">
                <Compiler handleCodeMirrorChange = { this.handleCodeMirrorChange}/>
                <Result result = { this.state.result }/>
            </div>
            <div>
                {/* <TestCase/> */}
                <Button
                    handleClick = { this.handleClick } 
                    code = { this.state.code } />
            </div>
        </div>
        );
    }
}