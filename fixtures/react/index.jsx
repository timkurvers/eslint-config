/* eslint-disable import/no-extraneous-dependencies */

import React from 'react';

class Button extends React.Component {

  static propTypes = {
    label: React.PropTypes.string.isRequired,
  };

  constructor() {
    super();

    this.state = { enabled: true };
  }

  render() {
    return (
      <button disabled={!this.state.enabled}>
        { this.props.label }
      </button>
    );
  }

}

export default Button;
