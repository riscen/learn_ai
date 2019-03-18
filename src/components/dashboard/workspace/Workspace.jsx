import React, {Component} from 'react';
import PropTypes from 'prop-types';

import '../../../styles/dashboard/workspace/workspace.css';

class Workspace extends Component {
    render = () => {
        return (
            <div className="workspace">
                <div className="workspace-header">
                    <div className="workspace-header-title title">
                        Workspace
                    </div>
                    <div className="workspace-header-home">   
                        <a href="#">Home</a>
                    </div>
                </div>
                
                <div className="workspace-body">
                    <div className="workspace-contents">
                        {this.props.children}
                    </div>
                </div>
            </div>
        );
    }
}

Workspace.propTypes = {
    children: PropTypes.node,
    expandedView: PropTypes.bool
};

export default Workspace;
