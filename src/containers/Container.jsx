import React, {Component} from 'react';
import Quiz from '../components/Quiz';
import Result from '../components/Result';
import Compiler from '../components/Compiler';
import Button from '../components/Button';

class Container extends Component {
    constructor(props) {
        super(props);
    }

    componentWillMount() {}

    render() {
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

export default Container;