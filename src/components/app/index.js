import React, { Component } from 'react';
import { connect } from 'react-redux';
import Spinner from './../shared/spinner';
import './index.scss';

// This component just for decuples my code and components
// And make single genral layout for my project and single spinner.
// nested of add spinner into each component

class App extends Component {
	renderContent = () => {
		const { children } = this.props;

		return (<div className="content-wrapper">
					{ children }
				</div>);
	}

	render() {
		const { loading } = this.props;
		return (
			<div className="app-wrapper">
				<div className="page-wrapper container">
					{ !!loading ? <Spinner /> : this.renderContent() }
				</div>
			</div>
		);
	}
}

const mapStateToProps = ({ common: { loading } }) => ({ loading });

export default connect(mapStateToProps)(App);
