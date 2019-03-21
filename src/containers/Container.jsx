import React, {Component} from 'react';
import Quiz from '../components/Quiz';
import Result from '../components/Result';
import Compiler from '../components/Compiler';
import TestCase from '../components/TestCase';

class Container extends Component {
    constructor(props) {
        super(props);

        this.itemChange = (dataFromChild) => {
            this.setState({
                quiz: {
                    quiz1: {
                        title: 'test!!',
                        quiz: 'testQuiz!!'
                    }
                }
            });
        }

        this.setQuizList = () => {
            //ajax에서 가져와야함.
            // component init시 셋팅하도록!
            const dummyData = [{
                quiz1: {
                    title: 'quiz1',
                    quiz: 'quiz1'
                }
            }, {
                quiz2: {
                    title: 'quiz2',
                    quiz: 'quiz2'
                }
            }, {
                quiz3: {
                    title: 'quiz3',
                    quiz: 'quiz3'
                }
            }, {
                quiz4: {
                    title: 'quiz4',
                    quiz: 'quiz4'
                }
            }];
            let quizList = {};
            dummyData.forEach((data, idx) => {
                let key = Object.keys(data);
                quizList[key] = dummyData[idx][key];
            });               

            this.setState({
                quizList: quizList,
                titles: Object.keys(quizList)
            });
        }
    }

    componentWillMount() {
        this.setQuizList();
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
                    quiz = { this.state.quizList['quiz1'].quiz }
                    titles = { this.state.titles }
                    callbackItemChange = { this.itemChange }/>
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