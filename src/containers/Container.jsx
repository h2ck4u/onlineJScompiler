import React, {Component} from 'react';
import Quiz from '../components/Quiz';
import Result from '../components/Result';
import Compiler from '../components/Compiler';
import Button from '../components/Button';

import { connect } from 'react-redux';
import * as actions from '../actions';

class Container extends Component {
    constructor(props) {
        super(props);
        this.handleCodeMirrorChange = this.handleCodeMirrorChange.bind(this);
    }

    componentWillMount() {}

    handleCodeMirrorChange(value) {
        this.setState({
            code: value
        })
    }

    render() {
        console.log('Render Container!!', this.props);
        return (
        <div className = "main-section">
            <div>
                <Quiz/>
            </div>
            <div className = "run-section">
                <Compiler /> 
                <Result result = { this.props.result }/>
            </div>
            <div>
                <Button
                    code = { this.props.code }/>
            </div>
        </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        code: state.container.code,
        result: state.result.result
    };
}

export default connect(mapStateToProps)(Container);