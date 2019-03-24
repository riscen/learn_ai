import React, {Component} from 'react';
import ReactDOM from 'react-dom';

import PerceptornControls from './controls/PerceptornControls';

import Perceptron from './perceptron.js';

import '../../../styles/topicImplementations/perceptron/perceptron.css';

class PerceptronUI extends Component {
    
    constructor(props) {
        super(props);
        
        this.state = {
            epochs: 50,
            inputData: [],
            learningRate: .1
        };
        
        this.canvas = null;
        this.scale = 40;
        this.perceptron = new Perceptron();
    }
    
    componentDidMount = () => {
        this.drawPlane();
    }
    
    canvas2CartesianCoord = (pos) => {
        const canvas = this.canvas;
        return {
            x: (pos.x - canvas.offsetLeft - (canvas.width * .5))/this.scale,
            y: (-(pos.y - canvas.offsetTop - (canvas.height * .5)))/this.scale
        };
    }
    
    cartesian2CanvasCoord = (pos) => {
        const canvas = this.canvas;
        const rect = canvas.getBoundingClientRect();
        const scaleX = canvas.width / rect.width;
        const scaleY =  canvas.height / rect.height;
        const x = this.scale*pos.x + canvas.offsetLeft + (canvas.width * .5);
        const y = -this.scale*pos.y + canvas.offsetTop + (canvas.height * .5);
        return {
            x: (x - rect.left)*scaleX,
            y: (y - rect.top)*scaleY
        };
    }
    
    handleClick = event => {
        const pos = {
            x: event.clientX,
            y: event.clientY
        };
        const cartesianPos = this.canvas2CartesianCoord(pos);
        const inputClass = this.perceptron.trained ? (this.perceptron.calculateOutput([cartesianPos.x, cartesianPos.y]) === 1 ? 1 : 0) : event.button === 0 ? 0 : 1;
        const {x, y} = this.cartesian2CanvasCoord(cartesianPos);
        const color = inputClass === 0 ? "blue" : "red";
        const ctx = this.canvas.getContext("2d");
        ctx.beginPath();
        ctx.arc(x, y, 4, 0, 2 * Math.PI);
        ctx.fillStyle = color;
        ctx.fill();
        event.preventDefault();
        this.setState({
           inputData: [...this.state.inputData,
            {
                x: [cartesianPos.x, cartesianPos.y],
                y: inputClass
            }
           ] 
        });
    }
    
    trainPerceptron = () => {
        const inputData = this.state.inputData;
        const epochs = this.state.epochs;
        const learningRate = this.state.learningRate;
        const x = [];
        const y = [];
        inputData.forEach(input => {
            x.push(input.x);
            y.push(input.y);
        });
        if(!this.perceptron.train(x, y, learningRate, epochs)) {
            window.alert("The perceptron couldn't converge.\nRemember it only can classify linearly separable classes");
        }
        else {
            this.drawLine();
            // window.alert("Success");
        }
    }
    
    drawLine = () => {
        const canvas = this.canvas;
        const ctx = canvas.getContext("2d");
        const xi = this.canvas2CartesianCoord({x: canvas.offsetLeft, y: 0}, canvas).x;
        const xf = this.canvas2CartesianCoord({x: canvas.width+canvas.offsetLeft, y: 0}, canvas).x;
        const yi = this.slopeFuction(xi);
        const yf = this.slopeFuction(xf); 
        ctx.strokeStyle = '#00ff00';
        ctx.lineWidth = 2;
        ctx.beginPath();
        ctx.moveTo(0, this.cartesian2CanvasCoord({x: 0, y: yi}, canvas).y);
        ctx.lineTo(canvas.width, this.cartesian2CanvasCoord({x: 0, y: yf}, canvas).y);
        ctx.stroke();
    }
    
    slopeFuction = x => {
        const weights = this.perceptron.weights;
        return (-(weights[1]*x)-weights[0])/weights[2]
    }
    
    restartPerceptron = () => {
        const canvas = this.canvas;
        const ctx = canvas.getContext("2d");
        this.perceptron = new Perceptron();
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        this.drawPlane();
        this.setState({
            inputData: []
        });
    }
    
    drawPlane = () => {
        const canvas = this.canvas;
        const ctx = canvas.getContext("2d");
        const xm = canvas.width/2;
        const ym = canvas.height/2;
        ctx.strokeStyle = '#000000';
        ctx.lineWidth = 1;
        ctx.beginPath();
        ctx.moveTo(xm, 0);
        ctx.lineTo(xm, canvas.height);
        ctx.stroke();
        ctx.beginPath();
        ctx.moveTo(0, ym);
        ctx.lineTo(canvas.width, ym);
        ctx.stroke();
    }
    
    handleControlValueChange = event => {
        const value = event.target.value;
        if (value !== '' && value !== '0') {
            this.setState({
                [event.target.name]: Number(value)
            });
        }
    }
    
    render = () => {
        return  (
            <div className="perceptron">
                <div className="perceptron-canvas">
                    <canvas 
                        ref={el => this.canvas = el} 
                        height="500px"
                        width="500px"
                        onContextMenu={e => this.handleClick(e)}
                        onClick={e => this.handleClick(e)}
                    />
                </div>
                <div className="perceptron-controls-container">
                    <PerceptornControls 
                        epochs={this.state.epochs}
                        handleControlValueChange={this.handleControlValueChange}
                        learningRate={this.state.learningRate}
                        restart={this.restartPerceptron} 
                        tableData={this.state.inputData} 
                        train={this.trainPerceptron}
                    />
                </div>
                <div className="perceptron-chart"> 
                    <span>Chart</span>
                </div>
            </div>
        );
    }
}

export default PerceptronUI;
