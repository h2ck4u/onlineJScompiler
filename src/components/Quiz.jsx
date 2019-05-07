import React, {Component} from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';
import '../css/App.css'

class Quiz extends Component {
    constructor(props) {
        super(props);

        this.changeItem = this.changeItem.bind(this);
    }

    changeItem = (event) => {
        this.props.handleChangeItem(event.target);
    };
    
    // shouldComponentUpdate(nextProps, nextState) {
    //     if (this.props.selectedQuiz == nextProps.selectedQuiz) {
    //       return false;
    //     }
    //     return true;
    // }
    
    render() {
        // console.log('Render Quiz!!', this.props);
        const style = {
            width: '100%',
            height: '100%'
        };
        return (
            <div className = "container guide">
                <select onChange={ this.changeItem } >
                {this.props.titleList.map(title => (
                    <option key={title} value={title}>{title}</option>
                ))}
                </select>
                <div style = {style}> {this.props.selectedQuiz} </div>
            </div>
        );
    }
}
const mapStateToProps = (state) => {
    return {
        titleList: state.quiz.titleList,
        selectedQuiz: state.quiz.selectedQuiz
    };
}

const mapDispatchToProps = (dispatch) => {
    return {
        handleChangeItem: (target) => {
            dispatch(actions.changeItem(target))
        }
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Quiz);