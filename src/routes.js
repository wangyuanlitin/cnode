import React from 'react'
import { HashRouter, Switch, Route } from 'react-router-dom'

import Layout from './components/Layout'
import App from './containers/App'
import Topics from './containers/Topic';

export default (
  <HashRouter>
    <Layout>
      <Switch>
        <Route exact path='/' component={App} />
        <Route path='/topics/:id' component={Topics} />
      </Switch>
    </Layout>
  </HashRouter>
)