import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import store from './store';
import Thing from './app';

ReactDOM.render(
    <Provider store={store}>
        <Thing />
    </Provider>,
    document.getElementById('root')
)
