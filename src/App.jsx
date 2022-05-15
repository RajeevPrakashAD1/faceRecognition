import './App.css';
import { HashRouter, BrowserRouter, Switch, Route, Link } from 'react-router-dom';
import LandingPage from './LandingPage/landingPage';
import PreOrder from './LandingPage/preorder';
import Privacypolicy from './LandingPage/privacypolicy';
import Refundpolicy from './LandingPage/Refundpolicy';
import TC from './LandingPage/T&C';
import ShippingPolicy from './LandingPage/ShippingPolicy';
import FaceInput from './FaceInput/faceInput';
import CustomerForm from './customerForm/form';

function App() {
	return (
		<HashRouter>
			<div className="App">
				<Route exact path="/" component={FaceInput} />
				<Route exact path="/userDetails" component={CustomerForm} />
			</div>{' '}
			{' '}
		</HashRouter>
	);
}

export default App;
