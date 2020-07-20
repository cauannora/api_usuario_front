import React from 'react';

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect
  } from 'react-router-dom';

import {history} from './history';

import Lista from './pages/ListUsers/List';
import Home from './pages/Home/Home';
import Edit from './pages/Edit/index';
import Sobre from './pages/Sobre/Sobre';
import Layout from './components/layout/Layout';
import SingIn from './pages/Login/index';
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
              <Redirect to={{ pathname: "/login", state: { from: props.location} }}/>
          )
      }
  />    
);

const Routes = () => (
    <Router history={history}>
      <Switch>
          <Route exact path='/login' component={SingIn}/>
          <Route exact path='/register' component={SingUp}/>
          <Layout>
            <PrivateRoutes exact path='/decode' component={DecoderUpload}/>
            <PrivateRoutes exact path='/lista' component={Lista}/>
            <Route exact path='/' component={Home}/>
            <Route exact path='/sobre' component={Sobre}/>
            <PrivateRoutes exact path='/edit/:id' component={Edit}/>
          </Layout>
      </Switch>
    </Router>
);
export default Routes;