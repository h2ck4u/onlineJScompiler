import React, {Component} from 'react';

class Button extends Component {
    execute() {
        console.log('excute!!!');
    }
    
    constructor(props) {
        super(props);
        this.execute = this.execute.bind(this);
    }

    render() {
        return (
            <button onClick = { this.execute }> {this.props.type} </button>
        );
    }
}

Button.defaultProps = {
    type: 'Run'
};

export default Button;