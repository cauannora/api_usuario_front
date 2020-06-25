import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom'

import Info from './components/pages/Info';
import UsersList from './components/pages/Home';
import UsersEdit from './components/pages/Edit';
import UsersNew from './components/pages/New';
import Layout from './components/layout/Layout'
import FormLogin from './components/forms_buttons/FormLogin'
import DecoderUpload from './components/pages/Decoder'

function App() {
  return (
    <Router>
      <Layout>
      <Switch>
        <Route exact path='/'>
          <UsersList/>
        </Route>
		    <Route exact path='/decode'>
			    <DecoderUpload/>
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
