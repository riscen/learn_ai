import React, {Component} from 'react';
// import PropTypes from 'prop-types';

import Description from './description/Description';
import Workspace from './workspace/Workspace';

import TopicDescription from '../topics/TopicDescription';
import PerceptronDescription from '../topics/perceptron/PerceptronDescription';
import PerceptronUI from '../topicImplementations/perceptron/PerceptronUI';

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
            <div className="dashboard">
                <div className={`description-container ${this.state.descriptionClosed ? 'description-closed' : 'description-open'}`}>
                    <Description title={'Perceptron'} toggleDescription={this.toggleDescription}>
                        <TopicDescription>
                            <PerceptronDescription />
                        </TopicDescription>
                    </Description>
                </div>
                <div 
                    className={`workspace-container ${this.state.descriptionClosed ? 'expanded' : ''}`}
                >
                    <Workspace>
                        <PerceptronUI />
                    </Workspace>
                </div>
            </div>
        );
    }
}

// Dashboard.propTypes = {};

export default Dashboard;