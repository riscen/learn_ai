import React, { Component } from "react";
import PropTypes from "prop-types";

import "../../../../styles/topicImplementations/perceptron/controls/perceptronControls.css";

class PerceptronControls extends Component {
  render = () => {
    const tableData = this.props.tableData ? this.props.tableData : [];
    const rows = tableData.map((data, index) => {
      return (
        <tr key={`test-row-${index}`}>
          <td>{index + 1}</td>
          <td>{data.x[0]}</td>
          <td>{data.x[1]}</td>
          <td
            style={{
              fontWeight: "bold",
              color: data.y === 0 ? "blue" : "red"
            }}
          >
            {data.y === 0 ? "Left" : "Right"}
          </td>
        </tr>
      );
    });
    return (
      <div className="perceptron-controls">
        <div className="perceptron-controls-header title">
          <span>Controls</span>
        </div>

        <div className="perceptron-controls-widgets">
          <div className="perceptron-controls-widget">
            <div className="perceptron-controls-widget-label">
              <span>Learning Rate</span>
            </div>
            <div className="perceptron-controls-widget-input">
              <input
                type="number"
                name="learningRate"
                min=".1"
                max="1"
                step=".1"
                disabled={this.props.disableControls}
                value={this.props.learningRate}
                onChange={this.props.handleControlValueChange}
              />
            </div>
          </div>

          <div className="perceptron-controls-widget">
            <div className="perceptron-controls-widget-label">
              <span>Epochs</span>
            </div>
            <div className="perceptron-controls-widget-input">
              <input
                type="number"
                name="epochs"
                min="1"
                max="99"
                step="1"
                disabled={this.props.disableControls}
                value={this.props.epochs}
                onChange={this.props.handleControlValueChange}
              />
            </div>
          </div>

          <div className="perceptron-controls-widget">
            <div className="perceptron-controls-widget-input">
              <div className="progress-bar">
                <div className="progress-bar-label">
                  <span>Epochs passed: {this.props.epochsPassed}</span>
                </div>
                <div
                  className="bar"
                  style={{ width: `${(100 * this.props.epochsPassed) / this.props.epochs}%` }}
                />
              </div>
            </div>
          </div>

          <div className="perceptron-controls-widget">
            <div className="perceptron-controls-widget-button-group">
              <input
                className="button"
                type="button"
                value="Train"
                disabled={this.props.disableControls}
                onClick={() => this.props.train()}
              />
              <input
                className="button"
                type="button"
                value="Restart"
                onClick={() => this.props.restart()}
              />
            </div>
          </div>
        </div>

        <div className="horizontal-separator" />

        <div className="perceptron-controls-data">
          <table>
            <thead>
              <tr>
                <td>No.</td>
                <td>X</td>
                <td>Y</td>
                <td>Class</td>
              </tr>
            </thead>
          </table>
          <div className="perceptron-controls-data-body">
            <table>
              <tbody>{rows}</tbody>
            </table>
          </div>
        </div>
      </div>
    );
  };
}

PerceptronControls.propTypes = {
  disableControls: PropTypes.boolean,
  epochs: PropTypes.number,
  epochsPassed: PropTypes.number,
  handleControlValueChange: PropTypes.func,
  learningRate: PropTypes.number,
  restart: PropTypes.func,
  tableData: PropTypes.array,
  train: PropTypes.func
};

export default PerceptronControls;
