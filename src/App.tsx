import React from 'react';
import 'App.scss';

import {
  Router,
  Switch,
  Route,
} from 'react-router-dom';
import { createBrowserHistory } from 'history';


const history = createBrowserHistory();

function App() {
  return (
    <Router history={history}>
      <React.Suspense fallback={<p>Loading</p>}>
        <Switch>
          <Route exact path="/" component={React.lazy(() => import('pages/Home'))} />
          <Route path="/career" component={React.lazy(() => import('pages/Career'))} />
          <Route path="/hypnospace" component={React.lazy(() => import('pages/Hypnospace'))} />
          <Route component={React.lazy(() => import('pages/NotFound'))} />
        </Switch>
      </React.Suspense>
    </Router>
  );
}

export default App;
