/* eslint-disable import/no-extraneous-dependencies */

import PropTypes from 'prop-types';
import React from 'react';

class Button extends React.Component {
  constructor() {
    super();

    this.state = { enabled: true };
  }

  render() {
    const { label } = this.props;
    const { enabled } = this.state;
    return (
      <button disabled={!enabled} type="button">
        {label}
      </button>
    );
  }
}

Button.propTypes = {
  label: PropTypes.string.isRequired,
};

export default Button;
