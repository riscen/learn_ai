import React, {Component, Fragment} from 'react';
import PropTypes from 'prop-types';

import '../../styles/topics/topicDescription.css';

class TopicDescription extends Component {
    
    goUp = () => {
        console.log('Go up');
    }
    
    render = () => {
        return (
            <Fragment>
                <div id="overview-container">
                    {this.props.children}
                </div>
                <div className="overview-go-up">
        		    <input type="button" value="Go up" onClick={() => this.goUp()} />
        		</div>
    		</Fragment>
        );
    }
}

TopicDescription.propTypes = {
    children: PropTypes.node
};

export default TopicDescription;