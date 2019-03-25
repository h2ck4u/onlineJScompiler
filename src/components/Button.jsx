import React, {Component} from 'react';
import axios from "axios";

export default class Button extends Component {
    onClick() {
        axios.post('/run', {
            lang: 'javascript',
            code: 'function solution(input) { return input; }',
        }).then(response => {
            console.log(response);
        });
    }

    constructor(props) {
        super(props);
        this.execute = this.onClick.bind(this);
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