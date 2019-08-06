import ReactDOM from 'react-dom';
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Nav from './components/nav.jsx';
import Home from './components/home.jsx';
import Products from './components/products.jsx';
import NotFound from './components/notfound.jsx';
 
class Main extends React.Component {
	render () {
		console.log("Main");
		return (
			<Router>
		        <div>
		           <Nav />
		            <Switch>
		                <Route exact path="/" component={Home} />
		                <Route path="/products" component={Products} />
		                <Route component={NotFound} />
		            </Switch>
		        </div>
		    </Router>
	    )
	}
}

ReactDOM.render(
	<Main />, document.getElementById("index")
);