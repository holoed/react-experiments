"use strict";

const Incrementer = React.createClass({
  getInitialState: function() {
    return { number: 0 };
  },

  increaseNumber: function(event) {
    this.setState({ number: this.state.number + 1 });
  },

  decreaseNumber: function(event) {
  	this.setState({ number: this.state.number - 1 });
  },

  render: function() {
    return <div>
               <p>{this.state.number}</p>
               <button onClick={this.increaseNumber}>Increase</button>
               <button onClick={this.decreaseNumber}>Decrease</button>
           </div>
  }
});