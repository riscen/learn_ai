import React, {Component} from 'react';

import Perceptron from './perceptron/Perceptron';

import '../styles/app.css';

class App extends Component {
    render = () => {
        return (
            <div className="app">   
                <Perceptron />
            </div>
        );
    }
}

export default App;