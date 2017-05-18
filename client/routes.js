import React from 'react'

import {
  // IndexRoute,
  Route,
  Router,
  browserHistory
} from 'react-router'
import Main from './containers/Main'
import Quiz from './containers/Quiz'
import Scoreboard from './containers/Scoreboard'

let routes = (
  <div>
    <Route path="/" component={Main} />
    <Route path="/quiz" component={Quiz} />
    <Route path="/scoreboard" component={Scoreboard} />
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
