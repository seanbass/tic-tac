import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Box from './js/components/box';
import MyInput from './js/components/box';
import styled from 'styled-components';


class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      color: null,
      height: null,
      text: ''
    }

  }

  handleChange = (event) => {
    this.setState({text: event.target.value});
  }

  colorToggle = (color) => {
    this.setState({color, height: 900})
  }

  render() {
    const {color, height, text} = this.state


    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo"/>
          <h1 className="App-title">Enter a Color!</h1>
          <input value={text} onChange={this.handleChange}/>
          <button onClick={this.colorToggle.bind(this, text)}>
               Press me!  
          </button>
          </header>
          <Box color={color} height={height}/>
      </div>
    );
  }
}


export default App;
