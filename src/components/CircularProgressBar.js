import React, { Component } from 'react'

export default class CircularProgressBar extends Component {
  render() {
    const { progress, skill } = this.props;
    return (
      <section className="progress-container">
        <section className="text-progress">{ skill }</section>
        <section className="gauge-container">
          <h2>title</h2>
          <section
            className="gauge"
            style={{ "--percentage": "80", "--fill": "#50fa7bff" }}
          >
            { progress }%
          </section>
        </section>
      </section>
    )
  }
}
