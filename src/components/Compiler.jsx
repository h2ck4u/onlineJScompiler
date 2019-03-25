import React, {Component} from 'react';
import {Controlled as CodeMirror} from 'react-codemirror2'
import '../css/App.css'

require('codemirror/lib/codemirror.css');
require('codemirror/mode/javascript/javascript.js');

class Compiler extends Component {
    state = {
        code: 'function solution() { \r\treturn; \r}'
    };

    render() {
        let options = {
            mode: 'javascript',
            theme: 'darcula',
            lineNumbers: true
        };
        return (
            <div className = "code-section">
                <div className = "container run">
                    <CodeMirror
                        value={this.state.code}
                        options={options}
                        onBeforeChange={(editor, data, value) => {
                            this.setState({value});
                        }}
                        onChange={(editor, data, value) => {
                            this.setState({value});
                        }}
                    />
                </div>
            </div>
        );
    }
}

export default Compiler;