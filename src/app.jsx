import ReactDOM from 'react-dom';
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Nav from './components/nav.jsx';
import Home from './components/home.jsx';
import Products from './components/products.jsx';
import NotFound from './components/notfound.jsx';
import Recall from './components/Recall/index.jsx';
import { runNormilize } from './utils/test';
 
class Main extends React.Component {
	render () {
		console.log("Main");
		runNormilize();
		return (
			<Router>
		        <div>
		           <Nav />
		            <Switch>
		                <Route exact path="/" component={Home} />
		                <Route path="/products" component={Products} />
										<Route path="/recall" component={Recall} />
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