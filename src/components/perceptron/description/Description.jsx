import React, {Component} from 'react';
import PropTypes from 'prop-types';

import '../../../styles/perceptron/description/description.css';

class Description extends Component {
    
    constructor(props) {
        super(props);
        
        this.state = {
            paneClosed: false
        };
    }
    
    handleClick = () => {
        this.setState({
            paneClosed: !this.state.paneClosed
        });
        if (this.props.toggleDescription) {
            this.props.toggleDescription();
        }
    }
    
    render = () => {
        return (
            <div className="description">
                <div className="description-contents">
                    <div className="description-header title">
                        {this.props.title}
                    </div>
                    <div className="description-body">
                        {this.props.children}
                    </div>
                </div>
                
                <div 
                    className="description-close-button"
                    onClick={this.handleClick}
                >
                    <span>
                        {this.state.paneClosed ? '>' : '<'}
                    </span>
                </div>
                
            </div>
        );
    }
}

Description.propTypes = {
    children: PropTypes.node,
    title: PropTypes.string,
    toggleDescription: PropTypes.func
};

export default Description;