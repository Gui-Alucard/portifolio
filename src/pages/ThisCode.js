import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Input from '../components/Input';

export default class ThisCode extends Component {
  render() {
    return (
      <div>
        ThisCode
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
