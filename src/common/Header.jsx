import React, { Component } from 'react'
import Nav from './Nav'
import {
    BrowserRouter as Router,Switch,Route,Link
  } from "react-router-dom";
import Home from '../components/Home';

export class Header extends Component {
  render() {
    return (      
      <Router>
          <div>
            <Nav/>
              <Switch>
                  <Route exact path='/' component={ Home }></Route>
              </Switch>
          </div>
      </Router>
    )
  }
}

export default Header