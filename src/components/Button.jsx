import React, {Component} from 'react';
import axios from "axios";

export default class Button extends Component {
    onClick() {
        console.log(this.props.code)
        axios.post('/run', {
            lang: 'javascript',
            code: this.props.code,
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
        console.log('Render Button!!');
        return (
            <button onClick = { this.onClick }> {this.props.type} </button>
        );
    }
}

Button.defaultProps = {
    code: 'function solution(input) { \r\treturn; \r}',
    type: 'Run'
};