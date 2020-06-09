import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom'

import UsersList from './components/Home';
import UsersEdit from './components/UserEdit';
import UsersNew from './components/UserNew';
import Layout from './components/Layout'

function App() {
  return (
    <Router>
      <Layout>
      <Switch>
        <Route path='/home'>
          <UsersList/>
        </Route>
        <Route path='/edit/:id'>
          <UsersEdit/>
        </Route>
        <Route path='/new'>
          <UsersNew/>
        </Route>
      </Switch>
      </Layout>
    </Router>
  );
}

export default App;
