import React, {Component} from 'react';
import {UnControlled as CodeMirror} from 'react-codemirror2'
import '../css/App.css'

require('codemirror/lib/codemirror.css');
require('codemirror/mode/javascript/javascript.js');

export default class Compiler extends Component {
    state = {
        code: 'function solution(input) { \r\treturn; \r}'
    };

    constructor(props) {
        super(props);
    }

    render() {
        let options = {
            mode: 'javascript',
            theme: 'darcula',
            lineNumbers: true,
            height: '100%'
        };
        return (
            <div className = "code-section">
                <div className = "container run">
                    <CodeMirror
                        value = { this.state.code }
                        options = { options }
                        onChange = { (editor, data, value) => {
                            this.props.handleCodeMirrorChange(value);
                        }}
                    />
                </div>
            </div>
        );
    }
}