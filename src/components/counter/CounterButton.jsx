import React, { Component } from "react";
import PropTypes from 'prop-types';
import Counter from "./Counter";

class CounterButton extends Component{
  // adding State
  // Define the initial state in a constructor. 
  // the update the state. 
  // then each time someone clicks, you counter++;
  // state set to the value of 0
  constructor(){
  super();
/*
    this.state = {
      counter : 0
    }

    // bind this to the increment. We don't have to do this if we do arrow method. 
    this.increment = this.increment.bind(this);
    this.decrement = this.decrement.bind(this);
*/

  }
//  if you want to call a locally defined method, use this.method name. 
  render() {
    return (
        <div className="counter">
          {/*So there is a counter, and there are buttons. Kind of Java Composition
          The Counter has buttons that when pressed, adds the specified number
          to the counter. You you send the number that each button represents to 
          the counter. 
          When you press it, it calls the child's incremenent method. 
          */}
        <button onClick={() => this.props.incrementMethod(this.props.by)}>+{this.props.by}</button>
        <button onClick={() => this.props.decrementMethod(this.props.by)}>-{this.props.by}</button>
         </div>
      )
  }
/*
  increment(){

    this.setState(
      (prevState) => {
          return {counter : prevState.counter + this.props.by}
    });
    this.props.incrementMethod(this.props.by);
  }



 decrement(){

  this.setState(
    (prevState) => {
    return {counter: prevState.counter - this.props.by}
  });
    
  this.props.decrementMethod(this.props.by);
}
*/

}

// adding default values for properties
// You have to import prop types. 
CounterButton.defaultProps = {
  by : 1
}

CounterButton.propTypes = {
    by : PropTypes.number
}

export default CounterButton