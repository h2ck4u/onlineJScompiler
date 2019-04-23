import React, {Component} from 'react';
import axios from "axios";

import * as actions from '../actions';
import { connect } from 'react-redux';

class Button extends Component {
    onClick() {
        const headers = {
            'Content-Type': 'application/json',
        };
        axios.post('/run', {
            lang: 'javascript',
            code: this.props.code,
            selectedQuiz: 0
        }, headers).then(response => {
            console.log(response);
            this.props.handleClick(response);
        }).catch(error => {
            console.log(error);
        });
    }

    constructor(props) {
        super(props);
        this.onClick = this.onClick.bind(this);
    }

    render() {
        // console.log('Render Button!!');
        return (
            <button onClick = { this.onClick }> {this.props.type} </button>
        );
    }
}

const mapStateToProps = (state) => {
    console.log(state)
    return {
        result: state.result.result
    };
}

const mapDispatchToProps = (dispatch) => {
    return {
        runCode: (code) => {
            dispatch(actions.runCode(code))
        }
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Button);

Button.defaultProps = {
    code: 'function solution(input) { \r\treturn; \r}',
    type: 'Run'
};