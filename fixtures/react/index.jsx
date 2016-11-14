/* eslint-disable import/no-extraneous-dependencies */

import React from 'react';

class Configuration extends React.Component {

  constructor() {
    super();

    this.state = { enabled: true };
  }

  render() {
    return (
      <config>
        { this.state.enabled }
      </config>
    );
  }

}

export default Configuration;
