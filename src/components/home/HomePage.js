import React from 'react';
import {Link} from 'react-router';

class HomePage extends React.Component {
	render() {
		return (
			<div className="jumbotron">
				<h1>Admin</h1>
				<p>Responsive web app</p>
				<Link to="about" className="btn btn-primary btn-large">Learn more</Link>
			</div>
		);
	}
}

export default HomePage;
