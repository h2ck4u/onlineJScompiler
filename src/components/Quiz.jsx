import React, {Component} from 'react';
import '../css/App.css'

class Quiz extends Component {
    constructor(props) {
        super(props);

        this.itemChange = this.itemChange.bind(this);
    }

    itemChange = (event) => {
        this.props.callbackItemChange(event);
    };
    
    componentDidUpdate() {}
    
    render() {
        const style = {
            width: '100%',
            height: '100%'
        };
        return (
            <div className = "container guide">
                <select onChange={ this.itemChange } >
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