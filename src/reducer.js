const initialState = {
    count: 1
}

export default (state = initialState, action) => {
    switch (action.type) {
        case 'INCREMENT_COUNT':
            return {...state, count: ++state.count};
        default:
            return state;
    }
}
