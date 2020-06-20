import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom'

import Info from './components/Info';
import UsersList from './components/Home';
import UsersEdit from './components/UserEdit';
import UsersNew from './components/UserNew';
import Layout from './components/layout/Layout'
import FormLogin from './components/FormLogin'

function App() {
  return (
    <Router>
      <Layout>
      <Switch>
        <Route exact path='/'>
          <UsersList/>
        </Route>
        <Route exact path='/edit/:id'>
          <UsersEdit/>
        </Route>
        <Route exact path='/new'>
          <UsersNew/>
        </Route>
        <Route exact path='/login'>
          <FormLogin/>
        </Route>
		    <Route path='/'>
			    <Info/>
		    </Route>
      </Switch>
      </Layout>
    </Router>
  );
}

export default App;
