import React from 'react'

import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom'
import Home from './Home'
// modal's
import ModalNewFile from './Home/components/Modal'

function Routes () {
  return (
    <Router>
      <Switch>
        <Route path="/" component={ Home } exact />
        {/* modal's */}
        <Route path="/newfile" component={ ModalNewFile } />
      </Switch>
    </Router>
  )
}

export default Routes
