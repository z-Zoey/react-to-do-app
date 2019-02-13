import React, { Component } from 'react';
import Todos from './Todos';

class App extends Component {
    state = {
        todos: [
            { id: 1, content: 'Play Zelda' },
            { id: 2, content: 'Watch TV' }
        ]
    }
    render() {
        return (
            <div className="to-app container">
                <h1 className="center blue-text">To-do's</h1>
                <Todos todos={this.state.todos} />
            </div>
        )

    }
}

export default App;