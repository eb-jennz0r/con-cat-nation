import reducer from './reducer';
import {createStore} from 'redux';

const store = createStore(reducer);

// Subscribe to Store for updates
// Similar to pub/sub model

store.subscribe(() => {
    console.log(store.getState());
})

export default store;
