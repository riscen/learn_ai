import React, {Component} from 'react';

import Dashboard from './dashboard/Dashboard';

import '../styles/app.css';

class App extends Component {
    render = () => {
        return (
            <div className="app">   
                <Dashboard />
            </div>
        );
    }
}

export default App;