import React, {Component} from 'react';
import {connect} from 'react-redux';

class app extends Component {
    state = {name: ''}

    // Using a fat arrow automatically binds the method to the class
    // instead of having to bind to this explicitly.
    // incrementCount() {
    //     console.log('beep');
    // }

    incrementCount = () => {
        console.log('moop');

        // dispatch (out of the box) only takes plain JS objects
        // generally agreement b/t dispatch action and the reducers
        // has key type (maybe action??) and key payload
        this.props.dispatch({
            type: 'INCREMENT_COUNT'
        });
    }

    addToQueue = () => {

    }

    handleNameChange = () => {
        
    }

    handleSubmit = (e) => {
        e.preventDefault();

    }

    render() {        
        return (
            <div>
                <h1>Not halpful</h1>
                <button onClick={this.incrementCount}>Button</button>
                <p>{this.props.count}</p>
                <form>
                    <label for="name">Name:</label>
                    <input type="text" id="name" name="user_name" onChange={this.handleNameChange} />
                    <button type="submit" onClick={this.handleSubmit} >Submit</button>
                </form>
            </div>
        );
    }
}

// State is usually an Object
// This will return an Object
// The Store State maps to the Props of the View
// Abstraction around setting listeners on the Store

const mapStateToProps = (state) => {
    return {
        count: state.count
    }
}

// Find PROPerties on the Store, set a listener so connect knows
// when there are changes. If connect knows, the app will know!

// Connect (which is essentially our Dispatcher)
// sets up the Component to listen to the store and talk to
// the store via Reducers

export default connect(mapStateToProps)(app);
