import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom'

import Lista from './pages/List';
import Home from './pages/Home';
import UsersEdit from './pages/Edit';
import UsersNew from './pages/New';
import Sobre from './pages/Sobre';
import Layout from './components/layout/Layout'
// import Sobre from './pages/Sobre'
// import FormLogin from './forms_buttons/FormLogin'
import DecoderUpload from './pages/Decoder'

function App() {
  return (
    <Router>
      <Layout>
      <Switch>
        <Route exact path='/'>
          <Home/>
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
        <Route exact path='/sobre'>
          <Sobre/>
        </Route>
        {/* <Route exact path='/login'>
          <FormLogin/>
        </Route> */}
		    <Route exact path='/lista'>
			    <Lista/>
		    </Route>
      </Switch>
      </Layout>
    </Router>
  );
}

export default App;
