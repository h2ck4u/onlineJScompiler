import React, {Component} from 'react';
import '../css/App.css'

class Quiz extends Component {

    static defaultProps = {
        title: '제목',
        quiz: 'quiz1'
    }

    render() {
        return (
            <div className = "container">
                퀴즈영역
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