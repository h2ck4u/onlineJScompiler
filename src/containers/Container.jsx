import react, {Component} from 'react';
import Quiz from './components/Quiz';
import Result from './components/Result';
import Compiler from './components/Compiler';
import TestCase from './components/TestCase';

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
            value: '10보다 작은 자연수 중에서 3 또는 5의 배수는 3, 5, 6, 9 이고, 이것을 모두 더하면 23입니다. 1000보다 작은 자연수 중에서 3 또는 5의 배수를 모두 더하면 얼마일까요?'
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
                <Title></Title>
                <Lang></Lang>
            </div>
            <div>
                <Quiz></Quiz>
                <Compiler></Compiler>
                <Result></Result>
            </div>
            <div>
                <TestCase></TestCase>
                <Button></Button>
            </div>
        </div>
        );
    }
}

export default Container;