import React, { Component } from 'react';
import Header from './header';
import Content from './content';
import Intro from './intro';
class Main extends Component {
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

export default Main;