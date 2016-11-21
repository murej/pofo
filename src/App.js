import React, { Component } from 'react';
import logo from './logo.svg';
import './App.scss';

import Header from './components/Header';

class App extends Component {
  render() {
    return (
      <div className='App'>
        <Header />
        {this.props.children}
      </div>
    );
  }
}

export default App;
