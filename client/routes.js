import React from 'react'

import {
  // IndexRoute,
  Route,
  Router,
  browserHistory
} from 'react-router'
import Main from './containers/Main'

let routes = (
  <div>
    <Route path="/" component={Main} />
  </div>
)

if (module.hot) {
  const oldRoutes = module.hot.data && module.hot.data.routes
  if (oldRoutes) {
    routes = oldRoutes
  }
  module.hot.dispose(function (data) {
    data.routes = routes
  })
}

export default (
  <Router
    history={browserHistory}>
    {routes}
  </Router>
)
