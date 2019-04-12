import React from 'react';
import ReactDOM from 'react-dom';
import Container from '../containers/Container';

import { createStore} from 'redux'
import reducers from './reducers'

const store = createStore(reducers);

const rootElement = document.getElementById('root');
ReactDOM.render(<Container store = { store }/>, rootElement);