import React, {Component} from 'react';
import '../css/App.css'

export default class Result extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className = "output-section">
                <div className = "tab-header">
                    <div className = "output-title">
                        실행 결과
                    </div>
                </div>
                <div className = "container output">
                    { this.props.result }
                </div>
            </div>
        );
    }
}

Result.defaultProps = {
    result: ''
};