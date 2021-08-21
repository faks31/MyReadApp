import React, { Component } from 'react';
import './App.css';
import Header from './Header';
import Books from './Books';


export default class App extends Component {
  render() {
    return (
      <div className="App">
      <Header />
      <Books />
    </div>
    );
  }
}

