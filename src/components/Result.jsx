import React, {Component} from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';
import '../css/App.css'

class Result extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        // console.log('Render Reulst!!');
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

const mapStateToProps = (state) => {
    console.log(state)
    return {
        result: state.result.result
    };
}

// const mapDispatchToProps = (dispatch) => {
//     return {
//         handleChangeItem: (target) => {
//             dispatch(actions.changeItem(target))
//         }
//     };
// }

export default connect(mapStateToProps)(Result);

Result.defaultProps = {
    result: ''
};