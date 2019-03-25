import React, {Component} from 'react';
import axios from "axios";

class Button extends Component {
    execute() {
        axios.post('/run', {
            lang: 'javascript',
            code: 'function solution(input) { return input;}',
        });
    }
    
    constructor(props) {
        super(props);
        this.execute = this.execute.bind(this);
    }

    render() {
        return (
            <button onClick = { this.execute }> {this.props.type} </button>
        );
    }
}

Button.defaultProps = {
    type: 'Run'
};

export default Button;