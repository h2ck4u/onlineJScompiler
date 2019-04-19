import React from 'react';
import ReactDOM from 'react-dom';
import Container from '../containers/Container';

import { createStore} from 'redux';
import { Provider } from 'react-redux';
import reducers from '../reducers';
const store = createStore(reducers);

ReactDOM.render(
    <Provider store = {store} >
        <Container/>
    </Provider>, 
    document.getElementById('root')
);