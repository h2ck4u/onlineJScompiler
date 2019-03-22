import React, {Component} from 'react';
import '../css/App.css'

class Result extends Component {
    render() {
        return (
            <div className = "output-section">
                <div className = "tab-header">
                    <div className = "output-title">
                        실행 결과
                    </div>
                </div>
                <div className = "container output">
                                결과 영역
                </div>
            </div>
        );
    }
}

export default Result;