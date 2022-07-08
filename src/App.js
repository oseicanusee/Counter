import React, { Component } from 'react';
import FirstComponent from './components/learning-examples/FirstComponent';

import logo from './logo.svg';
import './App.css';
import SecondComponent from './components/learning-examples/SecondComponent';
import ThirdComponent from './components/learning-examples/ThirdComponent';
import Counter from './components/counter/Counter';


class App extends Component {
  render() {
  return (
      <div className='App'>
        <Counter></Counter>
      </div>
    )
  }
}



class LearningComponents extends Component {
  render(){
    return (
      <div className="LearningcComponent">
      My Hello World
      <FirstComponent></FirstComponent>
      <SecondComponent></SecondComponent>
      <ThirdComponent></ThirdComponent>
    </div>
    )
  }
}

export default App;
