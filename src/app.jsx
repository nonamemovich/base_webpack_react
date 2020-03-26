import ReactDOM from 'react-dom';
import React, { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Nav from './components/nav.jsx';
import { runNormilize } from './utils/test';

const Home = lazy(() => import('./components/home.jsx'));
const Products = lazy(() => import('./components/products.jsx'));
const NotFound = lazy(() => import('./components/notfound.jsx'));
const Recall = lazy(() => import('./components/Recall/index.jsx'));
 
const App = () => (
  <Router>
    <Suspense fallback={<div>Загрузка...</div>}>
      <Nav />
      <Switch>
				<Route exact path="/" component={Home} />
				<Route path="/products" component={Products} />
				<Route path="/recall" component={Recall} />
				<Route component={NotFound} />
      </Switch>
    </Suspense>
  </Router>
);

ReactDOM.render(
	<App />, document.getElementById("index")
);