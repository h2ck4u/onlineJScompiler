import React, {Component} from 'react';
import '../css/App.css'

class Quiz extends Component {

    static defaultProps = {
        title: '공배수의 합 계산하기',
        quiz: '10보다 작은 자연수 중에서 3 또는 5의 배수는 3, 5, 6, 9 이고, 이것을 모두 더하면 23입니다. 1000보다 작은 자연수 중에서 3 또는 5의 배수를 모두 더하면 얼마일까요?'
    }

    render() {
        return (
            <div className = "container">
                <select>{this.props.title}</select>
                <div>{this.props.quiz}</div>
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