import React, { Component } from 'react'

export default class A extends Component {
  render() {
    const { href, className, linkValue } = this.props;
    return (
      <a
        target="_blank"
        rel="noopener noreferrer"
        href={ href }
        className={ className }
      >
        { linkValue }
      </a>
    )
  }
}
