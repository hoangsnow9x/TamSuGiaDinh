import React from 'react';
import ReactDOM from 'react-dom';
import Layout from './views/home/layout/master.js';
import './public/css/style.css';
import './public/libs/font-awesome/css/font-awesome.min.css';

class App extends React.Component {
	render() {
		return (
			<Layout>
			<h1> hello </h1>
			</Layout>
		)
	}
}

ReactDOM.render(<App  title="Trang chu"/>, document.getElementById('root'));
