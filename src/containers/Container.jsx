import React, {Component} from 'react';
import Quiz from '../components/Quiz';
import Result from '../components/Result';
import Compiler from '../components/Compiler';
import Button from '../components/Button';
import QuizData from '../../Quiz.json';

import { connect } from 'react-redux';
import * as actions from '../actions';

class Container extends Component {
    constructor(props) {
        super(props);

        this.handleChange = this.handleChange.bind(this);
        this.handleClick = this.handleClick.bind(this);
        this.handleCodeMirrorChange = this.handleCodeMirrorChange.bind(this);
    }

    shouldComponentUpdate(nextProps, nextState) {
        if (this.props.selectedIndex == nextProps.selectedIndex) {
            console.log('Contaeinr: Do Not Render!')
            return false;
        }

        return true;
    }

    componentWillMount() {
        console.log('componentWillMout11')
    }

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
                <Quiz 
                    titleList = { this.props.titleList }
                    selectedQuiz = { this.props.quizList[this.props.selectedIndex] }
                    callbackChangeItem = { this.props.changeItem } />
            </div>
            <div className = "run-section">
                <Compiler handleCodeMirrorChange = { this.handleCodeMirrorChange}/>
                <Result result = { this.props.result }/>
            </div>
            <div>
                {/* <TestCase/> */}
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
        selectedIndex: state.container.selectedIndex,
        code: state.container.code,
        result: state.container.result,
        quiz: state.container.quiz,
        titleList: state.container.titleList,
        quizList: state.container.quizList
    };
}

const mapDispatchToProps = (dispatch) => {
    return {
        changeItem: (target) => {
            dispatch(actions.changeItem(target))
        }
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Container);