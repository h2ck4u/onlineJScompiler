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

    // shouldComponentUpdate(nextProps, nextState) {
    //     if ((this.props.selectedIndex == nextProps.selectedIndex) &&
    //         (this.props.code == nextProps.code)) {
    //         console.log('Contaeinr: Do Not Update!');
    //         return false;
    //     }
    //     console.log('Contaeinr: Should Update!');
    //     return true;
    // }

    componentWillMount() {}

    handleCodeMirrorChange(value) {
        this.setState({
            code: value
        })
    }

    render() {
        console.log('Render Container!!', this.props);
        //handleCodeMirrorChange = { this.props.runCode}
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
                    code = { this.props.code } 
                    runCode = { this.props.runcode }/>
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

const mapDispatchToProps = (dispatch) => {
    return {
        runCode: (code) => {
            dispatch(actions.runCode(code))
        }
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Container);