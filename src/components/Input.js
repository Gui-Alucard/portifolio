import React, { Component } from 'react'

export default class Input extends Component {
  render() {
    const { type, value, id, testid, placeHolder, inputName, className } = this.props;
    return (
      <label htmlFor={ id }>{ inputName }
        <input
          type={ type }
          value={ value }
          id={ id }
          data-testid={ testid }
          placeholder={ placeHolder }
          className={ className }
        />
      </label>
    )
  }
}
