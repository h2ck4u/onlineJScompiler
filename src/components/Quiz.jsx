import React, {Component} from 'react';
import '../css/App.css'

class Quiz extends Component {
    constructor(props) {
        super(props);

        this.changeItem = this.changeItem.bind(this);
    }

    changeItem = (event) => {
        this.props.callbackChangeItem(event);
    };
    
    shouldComponentUpdate(nextProps, nextState) {
        console.log('shouldComponentUpdate');
        // 수정 상태가 아니고, info 값이 같다면 리렌더링 안함
        if (this.props.selectedQuiz == nextProps.selectedQuiz) {
          return false;
        }
        // 나머지 경우엔 리렌더링함
        return true;
    }
    
    render() {
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

export default Quiz;