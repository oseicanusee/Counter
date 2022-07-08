import React, { Component } from "react";
import PropTypes from 'prop-types';
import './Counter.css';
import CounterButton from "./CounterButton";

class Counter extends Component {

  constructor(){
    // call super in constructor or else there will be an error. 
    super();

    this.state = {
      counter : 0
    }

    // bind this to the increment. We don't have to do this if we do arrow method. 
    this.increment = this.increment.bind(this);
    this.decrement = this.decrement.bind(this);
    this.reset = this.reset.bind(this)
  }

  render() {
    return (
      <div className='counter'>
        <CounterButton by={1} incrementMethod={this.increment} decrementMethod={this.decrement}/>
        <CounterButton by={5} incrementMethod={this.increment} decrementMethod={this.decrement}/>
        <CounterButton by={10} incrementMethod={this.increment} decrementMethod={this.decrement}/>
        <span className="count">{this.state.counter}</span>
        <div>
          <button className="reset" onClick={this.reset}>Reset</button>
          </div>
      </div>
    );
  }

  increment(by){
    // console.log('increment')
    //this.state.counter++; Bad practice
  
    // pass an object
    this.setState({
        counter: this.state.counter + by
    });
  }

  decrement(by){

    this.setState(
      
      (prevState) => {
        return {counter: prevState.counter - by}
      })
  }

  reset(){
    this.setState({
      counter:0
    }
    )
  }

}







// So we made another component called counter and put it in its own file. 
// In react, put components in their own file. 
// We call components in the App.js file. When that runs, it calls this Counter function. 
// This function has buttons and counter. Use Css to style the buttons. 

export default Counter