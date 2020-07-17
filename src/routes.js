import React from 'react';

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect
  } from 'react-router-dom';

  import Lista from './pages/CRUD/List';
  import Home from './pages/CRUD/Home';
  import UsersEdit from './pages/CRUD/Edit';
  import UsersNew from './pages/CRUD/New';
  import Sobre from './pages/CRUD/Sobre';
  import Layout from './components/layout/Layout';
  import FormLogin from './components/forms_buttons/FormLogin';
  import FormL from './pages/Login/index';
  import SingUp from './pages/Register/index';
  import DecoderUpload from './pages/Desofuscador/Decoder';
  import { isAuthenticated } from './helpers/auth';

  const PrivateRoutes = ({ component: Component, ...rest}) => (
    <Route 
        {...rest}
        render={props => 
            isAuthenticated() ? (
                <Component {...props}/>
            ) : (
                <Redirect to={{ pathname: "/", state: { from: props.location} }}/>
            )
        }
    />    
  );

  const Routes = () => (
      <Router>
        <Layout>
        <Switch>
          <Route exact path='/' component={Home}/>
          <Route exact path='/login' component={FormLogin}/>
          <Route exact path='/testel' component={FormL}/>
          <Route exact path='/testeR' component={SingUp}/>
          <Route exact path='/new' component={UsersNew}/>
          <Route exact path='/sobre' component={Sobre}/>
          <PrivateRoutes exact path='/decode' component={DecoderUpload}/>
          <PrivateRoutes exact path='/edit/:id' component={UsersEdit}/>
          <PrivateRoutes exact path='/lista' component={Lista}/>
        </Switch>
        </Layout>
      </Router>
 );
 export default Routes;