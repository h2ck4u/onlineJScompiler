import React, {Component} from 'react';
import {UnControlled as CodeMirror} from 'react-codemirror2'
import '../css/App.css'
import { connect } from 'react-redux';
import * as actions from '../actions';

require('codemirror/lib/codemirror.css');
require('codemirror/mode/javascript/javascript.js');

class Compiler extends Component {
    constructor(props) {
        super(props);
        this.handleCodeMirrorChange = this.handleCodeMirrorChange.bind(this);
    }

    handleCodeMirrorChange(value) {
        this.props.handleCodeMirrorChange(value);
    }

    render() {
        // console.log('Render Compiler!!');
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
                        value = { this.props.code }
                        options = { options }
                        onChange = { this.handleCodeMirrorChange }
                    />
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        code: state.compiler.code
    };
}

const mapDispatchToProps = (dispatch) => {
    return {
        handleCodeMirrorChange: (target) => {
            dispatch(actions.handleCodeMirrorChange(target))
        }
    };
}
export default connect(mapStateToProps, mapDispatchToProps)(Compiler);