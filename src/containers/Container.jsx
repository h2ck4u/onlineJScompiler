import React, {Component} from 'react';
import Quiz from '../components/Quiz';
import Result from '../components/Result';
import Compiler from '../components/Compiler';
import TestCase from '../components/TestCase';

class Container extends Component {
    constructor(props) {
        super(props);

        this.state = {
            quiz: {
                quiz1: {
                    title: '공배수의 합 계산하기',
                    quiz: '10보다 작은 자연수 중에서 3 또는 5의 배수는 3, 5, 6, 9 이고, 이것을 모두 더하면 23입니다. 1000보다 작은 자연수 중에서 3 또는 5의 배수를 모두 더하면 얼마일까요?'
                }, 
                quiz2: {
                    title: '??',
                    quiz: '???'
                }
            },
            titles: ['공배수의 합 계산하기', 'A + B', 'A * B'],
            value: '10보다 작은 자연수 중에서 3 또는 5의 배수는 3, 5, 6, 9 이고, 이것을 모두 더하면 23입니다. 1000보다 작은 자연수 중에서 3 또는 5의 배수를 모두 더하면 얼마일까요?'
        }
        this.myCallback = (dataFromChild) => {
            this.setState({
                quiz: {
                    quiz1: {
                        title: 'test!!',
                        quiz: 'testQuiz!!'
                    }
                }
            });
        }
    }
    static defaultProps = {
        title: '공배수의 합 계산하기',
        quiz: '10보다 작은 자연수 중에서 3 또는 5의 배수는 3, 5, 6, 9 이고, 이것을 모두 더하면 23입니다. 1000보다 작은 자연수 중에서 3 또는 5의 배수를 모두 더하면 얼마일까요?',
        lang: 'javascript'
    }

    render() {
        return (
        <div>
            <div>
            </div>
            <div>
                <Quiz 
                    quiz = { this.state.quiz['quiz1'].quiz }
                    titles = { this.state.titles }
                    callbackFromParent = { this.myCallback }/>
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