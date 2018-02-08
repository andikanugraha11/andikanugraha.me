import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import RouteOne from './content/routeOne';
import RouteTwo from './content/routeTwo';
class Content extends Component {

      render() {
        return (
          <div>
            <Switch>
              <Route exact path='/' component={RouteOne}/>
              <Route path='/routeTwo' component={RouteTwo}/>
            </Switch>
          </div>
        );
      }
}

export default Content;
