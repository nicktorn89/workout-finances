import React, { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Circle } from 'react-preloaders';

const Main = lazy(() => import('./modules/Main'));

function routes() {
  return (
    <Router>
      <Suspense fallback={<Circle />}>
        <div>
          <Route exact={true} path='/' component={Main} />
        </div>
      </Suspense>
    </Router>
  );
}

export default routes;
