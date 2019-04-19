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

        this.handleChange = this.handleChange.bind(this);
        this.handleClick = this.handleClick.bind(this);
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

    handleClick(e) {
        let resultMsg = '정답이 아닙니다.'
        if (e.data.result) {
            resultMsg = '정답입니다.'
        }
        this.setState({
            result: resultMsg
        });
    }

    handleChange(e) {
        this.setState({
            keyword: e.target.value
        });
    }

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
                <Compiler handleCodeMirrorChange = { this.props.runCode}/>
                <Result result = { this.props.result }/>
            </div>
            <div>
                <Button
                    handleClick = { this.handleClick } 
                    code = { this.props.code } />
            </div>
        </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        code: state.container.code,
        result: state.container.result
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