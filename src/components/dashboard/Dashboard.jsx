import React, {Component} from 'react';
import PropTypes from 'prop-types';

import Description from './description/Description';
import Workspace from './workspace/Workspace';

import TopicDescription from '../topics/TopicDescription';
import PerceptronDescription from '../topics/perceptron/PerceptronDescription';

import '../../styles/dashboard/dashboard.css';

class Dashboard extends Component {
    constructor(props) {
        super(props);
        
        this.state = {
          descriptionClosed: false  
        };
    }
    
    toggleDescription = () => {
        this.setState({
            descriptionClosed: !this.state.descriptionClosed
        });
    }
    
    render = () => {
        return (
            <div className="perceptron">
                <div className={`description-container ${this.state.descriptionClosed ? 'description-closed' : 'description-open'}`}>
                    <Description title={'Perceptron'} toggleDescription={this.toggleDescription}>
                        <TopicDescription>
                            <PerceptronDescription />
                        </TopicDescription>
                    </Description>
                </div>
                <div 
                    className={`title workspace-container ${this.state.descriptionClosed ? 'expanded' : ''}`}
                >
                    <Workspace>
                        <div>
                            <div>
                                <span>This represents an element on the workspace.</span>
                            </div>
                            <div>  
                                <table>
                                    <thead>
                                        <tr>
                                            <th>Num</th>
                                            <th>Text</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>1</td>
                                            <td>dsad</td>
                                        </tr>
                                        <tr>
                                            <td>2</td>
                                            <td>dsdasdad</td>
                                        </tr>
                                    </tbody>
                                </table>
                                <p>
                                    Ut enim ad minim veniam, quis nostrud exercitation ullamco 
                                    laboris nisi ut aliquip ex ea commodo consequat.
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, 
                                    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                                    Ut enim ad minim veniam, quis nostrud exercitation ullamco 
                                    laboris nisi ut aliquip ex ea commodo consequat.
                                    Ut enim ad minim veniam, quis nostrud exercitation ullamco 
                                    laboris nisi ut aliquip ex ea commodo consequat.
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, 
                                    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                                    Ut enim ad minim veniam, quis nostrud exercitation ullamco 
                                    laboris nisi ut aliquip ex ea commodo consequat.
                                </p>
                            </div>
                        </div>
                    </Workspace>
                </div>
            </div>
        );
    }
}

Dashboard.propTypes = {};

export default Dashboard;