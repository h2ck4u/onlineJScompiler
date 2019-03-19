import React, {Component} from 'react';
import '../css/App.css'

class Quiz extends Component {
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
        quiz: '10보다 작은 자연수 중에서 3 또는 5의 배수는 3, 5, 6, 9 이고, 이것을 모두 더하면 23입니다. 1000보다 작은 자연수 중에서 3 또는 5의 배수를 모두 더하면 얼마일까요?'
    }

    handleChange = (event) => {
        this.setState({ value: 'aaa' });
    };
    componentDidUpdate() {
        console.log('update!!')
    }
    render() {
        const { quiz, value } = this.state;
        const style = {
            width: '100%',
            height: '100%'
        };
        return (
            <div className = "container">
                <select onChange={this.handleChange} >
                {Object.keys(quiz).map(item => (
                    <option key={item.title} value={item.title}>{item.title}</option>
                ))}
                </select>
                <div style = {style}>{value}</div>
            </div>
        );
    }
}

// import React from 'react';
// const Quiz = ( {title, quiz} ) => {
//     return <div> ??? </div>;
// };

// Quiz.defaultPros = {
//     title: '제목',
//     quiz: 'quiz1'
// }
export default Quiz;