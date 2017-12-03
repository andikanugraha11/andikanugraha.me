import React, { Component } from 'react';
import Header from './component/header';
import Content from './component/content';
import Intro from './component/intro';

class App extends Component {
  render() {
    return (
      <div>
        <Intro/>
        <Header/>
        <div className="container">
          <Content/>
        </div>
      </div>
    );
  }
}

export default App;
