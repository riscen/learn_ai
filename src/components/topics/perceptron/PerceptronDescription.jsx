import React from "react";

const PerceptronDescription = props => {
  return (
    <div className="overview-contents">
      <h3>Overview</h3>
      <p>
        A perceptron is a neural network that consists in only one neuron which can infer in a
        linear form. This means that we can only infer between two classes that are linearly
        separable (e.g. fig. 1).
      </p>
      <div className="overview-img">
        <img
          src={require("../../../imgs/perceptron/classification.png")}
          alt="Classification model"
        />
        <div className="overview-img-footer">
          <span>Fig. 1. Classification model.</span>
        </div>
      </div>
      <p>A perceptron is composed by three main elements:</p>
      <div className="overview-u-list">
        <ul>
          <li>
            <span className="overview-strong">Inputs: </span>(
            <img
              className="overview-text-img"
              src={require("../../../imgs/perceptron/x.png")}
              alt="X"
            />
            ) The values we are going to use to train the network. These are values that represents
            the classes better (e.g. weight, age, height, speed, position, etc.).
          </li>
          <li>
            <span className="overview-strong">Weights: </span>(
            <img
              className="overview-text-img"
              src={require("../../../imgs/perceptron/w.png")}
              alt="W"
            />
            ) Random values (between -1 and 1) that are used to calculate the output. Weights
            represent the neuron's connections, and are updated regularly depending on the output of
            the neuron.
          </li>
          <li>
            <span className="overview-strong">Output: </span>(
            <img
              className="overview-text-img"
              src={require("../../../imgs/perceptron/y.png")}
              alt="Y"
            />
            ) The output of the neuron. This is the inference of the neuron with the given input.
          </li>
        </ul>
      </div>
      <h3>Training</h3>
      <p>
        The model of the perceptron is shown in fig. 2. Here we see the three main elements in a
        simple scheme.
      </p>
      <div className="overview-o-list">
        <ol>
          <li>We receive the inputs.</li>
          <li>We assign a weight to each input value.</li>
          <li>
            We calculate the activation function (the sum of the products between the weights and
            the inputs).
          </li>
          <li>We get the neuron's output.</li>
        </ol>
      </div>
      <div className="overview-img">
        <img src={require("../../../imgs/perceptron/perceptron.png")} alt="Perceptron" />
        <div className="overview-img-footer">
          <span>Fig. 2. Perceptron's representation.</span>
        </div>
      </div>
      <p>Knowing this we can divide the training in six steps:</p>
      <div className="overview-o-list">
        <ol>
          <li>Define the inputs and desired outputs.</li>
          <li>Initialize the weights.</li>
          <li>Calculate the activation function.</li>
          <li>Calculate the output</li>
          <li>Calculate the error.</li>
          <li>Update weights (if necessary).</li>
        </ol>
      </div>
      <h4>Define the inputs and desired outputs</h4>
      <p>
        The inputs are the most representative values of a class (e.g. weight, height, age, etc.)
        and therefore we need to define them carefully, because we are going to use them to train
        the perceptron.
      </p>
      <div className="overview-img">
        <img src={require("../../../imgs/perceptron/inputs.png")} alt="Inputs" />
        <div className="overview-img-footer">
          <span>Fig. 3. Inputs' representation.</span>
        </div>
      </div>
      <p>
        The output represents the class which the input belongs to. There's one for every input X.
      </p>
      <h4>Initialize the weights</h4>
      <p>Once we have the inputs, we can create the weights.</p>
      <div className="overview-note">
        <span className="overview-strong">Note: </span>The quantity of weights is equal to the
        quantity of inputs.
      </div>
      <p>Then we can initialize them to a random real value between -1 and 1.</p>
      <div className="overview-img">
        <img src={require("../../../imgs/perceptron/weights.png")} alt="Weights" />
        <div className="overview-img-footer">
          <span>Fig. 4. Weights' representation.</span>
        </div>
      </div>
      <p>
        We define an extra weight value, called <span className="overview-strong">bias</span>. This
        value helps us to get a better approach on the classification. The bias is initialized the
        same way as other weights an is represented as{" "}
        <span className="overview-strong">weight 0</span>.
      </p>
      <h4>Calculate the activation function</h4>
      <p>
        The activation function is the sum of the products between the weights and the inputs. The
        bias is added normally. Fig. 5. represents the the equation.
      </p>
      <div className="overview-img">
        <img src={require("../../../imgs/perceptron/lineal.png")} alt="Activation function" />
        <div className="overview-img-footer">
          <span>Fig. 5. Activation function.</span>
        </div>
      </div>
      <h4>Calculate the output</h4>
      <p>
        Now we have calculated the activation function (
        <img
          className="overview-text-img"
          src={require("../../../imgs/perceptron/z.png")}
          alt="z"
        />
        ) we can get the perceptron's output. As we know, the perceptron can infer between two
        classes, so we need to make an operation which makes{" "}
        <img
          className="overview-text-img"
          src={require("../../../imgs/perceptron/w.png")}
          alt="w"
        />{" "}
        into a range of two values (0 or 1). This is defined as shown in fig. 6.
      </p>
      <div className="overview-img">
        <img src={require("../../../imgs/perceptron/output.png")} alt="Perceptron's output" />
        <div className="overview-img-footer">
          <span>Fig. 6. Perceptron's output.</span>
        </div>
      </div>
      <h4>Calculate the error</h4>
      <p>
        The error is obtained substracting the perceptron's output to the desired output (fig. 7).
      </p>
      <div className="overview-img">
        <img src={require("../../../imgs/perceptron/error.png")} alt="Error equation" />
        <div className="overview-img-footer">
          <span>Fig. 7. Error equation.</span>
        </div>
      </div>
      <p>Where:</p>
      <div className="overview-u-list">
        <ul>
          <li>
            <img
              className="overview-text-img"
              src={require("../../../imgs/perceptron/yd.png")}
              alt="Desired output"
            />
            : The desired output. The class we want the perceptron to infer.
          </li>
          <li>
            <img
              className="overview-text-img"
              src={require("../../../imgs/perceptron/yo.png")}
              alt="Obtained output"
            />
            : The obtained output. The class the perceptron inferred.
          </li>
        </ul>
      </div>
      <p>The error is useful to know if the inference is correct or not.</p>
      <h4>Update weights (if necessary)</h4>
      <p>
        In case the error is not equal to 0 (this means the inference was incorrect) we need to
        update the weights. The equation is shown in fig. 8, and allows us to "shape" the weights to
        values near the inputs, therefore we can get a better classification.
      </p>
      <div className="overview-img">
        <img src={require("../../../imgs/perceptron/update.png")} alt="Weight update" />
        <div className="overview-img-footer">
          <span>Fig. 8. Weight update.</span>
        </div>
      </div>
      <p>Where:</p>
      <div className="overview-u-list">
        <ul>
          <li>
            <img
              className="overview-text-img"
              src={require("../../../imgs/perceptron/lr.png")}
              alt="Learning rate"
            />
            : Known as learning rate, is a small value (regularly .1) and allows us to "move" the
            weights in small steps, and therefore we can get a more precise classification.
          </li>
          <li>
            <img
              className="overview-text-img"
              src={require("../../../imgs/perceptron/e.png")}
              alt="Error"
            />
            : The obtained error.
          </li>
          <li>
            <img
              className="overview-text-img"
              src={require("../../../imgs/perceptron/x.png")}
              alt="Input"
            />
            : The input.
          </li>
        </ul>
      </div>
      <div className="overview-note">
        <span className="overview-strong">Note: </span>The learning rate is a value we can play
        with, in other words, we can change it to see how the perceptron's separability line
        changes.
      </div>
      <h3>Algorithm</h3>
      <p>Sumarizing we can define the algorithm as follows:</p>
      <div className="overview-o-list">
        <ol>
          <li>Prepare the inputs and desired outputs.</li>
          <li>Create and initialize the weights with random values.</li>
          <li>
            For every input X:
            <div className="overview-o-list">
              <ol>
                <li>Calculate de output.</li>
                <li>Get the error.</li>
                <li>Update weights if necesary.</li>
              </ol>
            </div>
          </li>
          <li>Repeat step 3 until the error is equal to 0 (all the inferences are correct).</li>
        </ol>
      </div>
      <h2>Example</h2>
      <p>
        In this page we present a small example of a perceptron which can infer between a left click
        and right click, using as inputs the position of the click on the canvas on the right.
      </p>
      <p>
        You can see on <span className="overview-strong">Controls</span> the values that you can
        modify, and once you finish introducing all the inputs you want, you can begin the training
        clicking the button <span className="overview-strong">Train</span>.
      </p>
      <p>
        In case you want to restart everything, you can click the button{" "}
        <span className="overview-strong">Restart</span> and everything will go back to blank.
      </p>
      <p>
        After training is complete, you will see the separability line, and you can check if the
        perceptron inferences are correct by clicking on both sides of the line and seeing the point
        classes (<span style={{ color: "blue" }}>blue</span> for left click, and{" "}
        <span style={{ color: "red" }}>red</span> for right click).
      </p>
      <h2>References</h2>
      <div className="overview-u-list">
        <ul>
          <li>
            Ponce, P. (2010). Artificial intelligence with applications to engineering. México:
            Alfaomega
          </li>
        </ul>
      </div>
    </div>
  );
};

export default PerceptronDescription;
