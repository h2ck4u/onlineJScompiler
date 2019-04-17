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

        // this.state = {
        //     selectedKey: 0,
        //     code: '',
        //     result: '',
        //     quiz: {
        //         title: QuizData[0].title,
        //         quiz: QuizData[0].quiz
        //     }
        // };

        this.handleChange = this.handleChange.bind(this);
        this.changeItem = this.changeItem.bind(this);
        this.setQuizList = this.setQuizList.bind(this);
        this.handleClick = this.handleClick.bind(this);
        this.handleCodeMirrorChange = this.handleCodeMirrorChange.bind(this);
    }

    shouldComponentUpdate(nextProps, nextState) {
        console.log('shouldComponentUpdate', this.state, this.props);
        // 수정 상태가 아니고, info 값이 같다면 리렌더링 안함
        if (this.state.selectedKey == nextState.selectedKey) {
          return false;
        }
        // 나머지 경우엔 리렌더링함
        return true;
    }

    componentWillMount() {
        console.log('componentWillMout11')
        this.setQuizList();
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

    changeItem = (dataFromChild) => {
        const selectedKey = dataFromChild.target.selectedIndex;
        this.setState({
            selectedKey: selectedKey,
            quiz: {
                title: this.state.titleList[selectedKey],
                quiz: this.state.quizList[selectedKey]
            }
        });
    }

    setQuizList = () => {
        this.setState({
            titleList: QuizData.map(quiz => quiz.title),
            quizList: QuizData.map(quiz => quiz.quiz)
        });
    }

    render() {
        console.log('Render Container!!', this.props);
        return (
        <div className = "main-section">
            <div>
                <Quiz 
                    titleList = { this.state.titleList }
                    selectedQuiz = { this.state.quizList[this.state.selectedKey] }
                    callbackChangeItem = { this.props.changeItem } />
            </div>
            <div className = "run-section">
                <Compiler handleCodeMirrorChange = { this.handleCodeMirrorChange}/>
                <Result result = { this.state.result }/>
            </div>
            <div>
                {/* <TestCase/> */}
                <Button
                    handleClick = { this.handleClick } 
                    code = { this.state.code } />
            </div>
        </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        selectedKey: state.container.selectedKey,
        code: '',
        result: '',
        quiz: state.container.quiz,
        titleList: state.container.titleList,
        quizList: state.container.quizList
    };
}

const mapDispatchToProps = (dispatch) => {
    return {
        changeItem: (data) => {
            dispatch(actions.changeItem(data))
        }
    };
}

// export default Container;
export default connect(mapStateToProps, mapDispatchToProps)(Container);