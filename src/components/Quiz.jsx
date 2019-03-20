import React, {Component} from 'react';
import '../css/App.css'

class Quiz extends Component {
    constructor(props) {
        super(props);
    }

    handleChange = (event) => {
        this.props.callbackFromParent(event);
    };
    componentDidUpdate() {
        console.log('update!!')
    }
    render() {
        const style = {
            width: '100%',
            height: '100%'
        };
        return (
            <div className = "container">
                <select onChange={ this.handleChange } >
                {this.props.titles.map(title => (
                    <option key={title} value={title}>{title}</option>
                ))}
                </select>
                <div style = {style}>{this.props.quiz}</div>
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