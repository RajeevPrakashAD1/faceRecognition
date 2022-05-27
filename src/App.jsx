import React from 'react';
import './App.css';
import { HashRouter, BrowserRouter, Switch, Route, Link } from 'react-router-dom';

import FaceInput from './FaceInput/faceInput';
import CustomerForm from './customerForm/form';
import Home from './home/home';
import Product from './products/product';

function App() {
	return (
		<HashRouter>
			<div className="App">
				<Route exact path="/" component={Home} />
				<Route exact path="/register" component={FaceInput} />
				<Route exact path="/userDetails" component={CustomerForm} />
				<Route exact path="/products" component={Product} />
			</div>{' '}
			{' '}
		</HashRouter>
	);
}

export default App;
