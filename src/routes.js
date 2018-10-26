import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './modules/App/App';

if (process.env.NODE_ENV !== 'production') {
  require('./modules/Post/pages/PostListPage/PostListPage');
  require('./modules/Post/pages/PostDetailPage/PostDetailPage');
}

export default (
  <Route path="/" component={App}>
    <IndexRoute
      getComponent={(nextState, cb) => {
        require.ensure([], require => {
          cb(null, require('./modules/Post/pages/PostListPage/PostListPage').default);
        });
      }}
    />
    <Route
      path="/posts/:id"
    />
  </Route>
);
