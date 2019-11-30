import React, { Component } from 'react';
import { connect } from "react-redux";
import * as actions from "../../redux/actions";

import routes from "../../routes";
import { Switch, Redirect, Route } from "react-router-dom";

class About extends Component {
  constructor(){
    super();
    this.state = {

    }
  }

  componentDidMount() {
    console.log('About Mounted');
  }

  render() {
    return (
      <div className="About">
        <header className="About-header">
          <p>
            This is About.
          </p>
        </header>
      </div>
    )
  }
}

export default About;
