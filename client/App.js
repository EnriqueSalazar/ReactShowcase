import React from 'react'
import {Grid} from 'react-flexbox-grid'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'

import routes from './routes'
import configureStore from './store/configureStore'
import {Provider} from 'react-redux'

const App = () => (
  <Provider store={configureStore({})}>
    <MuiThemeProvider>
      <Grid
        fluid style={{
          padding: 0
        }}>
        {routes}
      </Grid>
    </MuiThemeProvider>
  </Provider>
)
export default App
