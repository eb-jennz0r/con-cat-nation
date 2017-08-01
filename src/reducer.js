const initialState = {
    count: 0,
    queue: []
}

// Actions have a type and a payload.
// Typically the type is a string, and are often in a Constants file.
// The payload could be anythinggg!

export default (state = initialState, action) => {
    switch (action.type) {
        case 'INCREMENT_COUNT':
            return {...state, count: ++state.count};
        case 'ADD_TO_QUEUE':
            return {...state, queue: [
                ...state.queue, 
                {
                    id: ++state.count, 
                    name: action.payload.name
                }
            ]};
        default:
            return state;
    }
}
