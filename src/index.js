import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import store from './store';

ReactDOM.render(
    <Provider store={store}>
        <h1>covfefe</h1>
    </Provider>,
    document.getElementById('root')
)
