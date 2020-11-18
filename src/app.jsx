import ReactDOM from 'react-dom';
import React, { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Nav from './components/nav.jsx';
import { runNormilize } from './utils/test';

const Home = lazy(() => import('./modules/Home/index.jsx'));
const Products = lazy(() => import('./modules/Products/index.jsx'));
const NotFound = lazy(() => import('./modules/NotFound/index.jsx'));
const Recall = lazy(() => import('./modules/Recall/index.jsx'));
const ReactTable = lazy(() => import('./modules/ReactTable/index.jsx'));
const FlexBox = lazy(() => import('./modules/FlexBox/index.jsx'));
const SvgTest = lazy(() => import('./modules/SvgTest/index.jsx'));
const Form = lazy(() => import('./modules/Form/index.jsx'));

const routes = [
  {
    path: '/products',
    component: Products,
  },
  {
    path: '/recall',
    component: Recall,
  },
  {
    path: '/react-table',
    component: ReactTable,
  },
  {
    path: '/svg',
    component: SvgTest,
  },
  {
    path: '/form',
    component: Form,
  },
  {
    path: '/flex',
    component: FlexBox,
  }
];

const App = () => (
  <Router>
      <Suspense fallback={<div>Загрузка...</div>}>
        <Nav />
        <Switch>
          <Route exact path="/" component={Home} />
          {routes.map(({
            path, component: Module,
          })=>(
            <Route path={path} render={(props)=>(
              <Module {...props} />
            )}/>
          ))}
          <Route component={NotFound} />
        </Switch>
      </Suspense>
  </Router>
);

// runNormilize();

ReactDOM.render(
	<App />, document.getElementById("index")
);