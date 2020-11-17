import React, { Component } from 'react';
import './index.scss';

class Spinner extends Component {

  render() {
		return (
			<div className="app-spinner spinner-border" role="status">
        <span className="sr-only">Loading...</span>
      </div>
		);
  }
}

export default Spinner;
