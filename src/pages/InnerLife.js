import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Input from '../components/Input';

export default class InnerLife extends Component {
  render() {
    return (
      <div>
        InnerLife
        <footer className="footer">
          <Link to="/home">
            <div className="input-startover" />
            <Input
              className="input"
              type="button"
              value="Home"
            />
          </Link>
        </footer>
      </div>
    )
  }
}
