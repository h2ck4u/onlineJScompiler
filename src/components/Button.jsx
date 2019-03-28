import React, {Component} from 'react';
import axios from "axios";

export default class Button extends Component {
    onClick() {
        axios.post('/run', {
            lang: 'javascript',
            code: 'function solution(input) { return input; }',
            selectedQuiz: 0
        }).then(response => {
            this.props.handleClick(response);
        });
    }

    constructor(props) {
        super(props);
        this.onClick = this.onClick.bind(this);
    }

    render() {
        return (
            <button onClick = { this.onClick }> {this.props.type} </button>
        );
    }
}

Button.defaultProps = {
    type: 'Run'
};