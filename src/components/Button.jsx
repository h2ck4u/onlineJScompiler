import React, {Component} from 'react';
import axios from "axios";

import * as actions from '../actions';
import { connect } from 'react-redux';

class Button extends Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        this.props.handleClickResult(this.props.code);
    }
    render() {
        return (
            <button onClick = { this.handleClick }> {this.props.type} </button>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        code: state.compiler.code
    };
}

const mapDispatchToProps = (dispatch) => {
    return {
        handleClickResult: (code) => {
            dispatch(actions.handleClickResult(code))
        }
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Button);

Button.defaultProps = {
    code: 'function solution(input) { \r\treturn; \r}',
    type: 'Run'
};