import React from 'react';
import Quiz from './Quiz';
import Compiler from './Compiler';
import TestCase from './TestCase';
import Result from './Result';
class App extends React.Component {
    render(){

        return (
            <div>
                <Quiz></Quiz>
                <Compiler></Compiler>
                <TestCase></TestCase>
                <Result></Result>
            </div>
        );
    }
}

export default App;