import React from 'react';
import { Switch, Route } from 'react-router-dom';
import App from './components/App';
import Userpage from './components/Userpage';
import Login from './components/Login';
import Signup from './components/Signup';


const Routes = () => (
  <main>
    <Switch>
      <Route exact path='/' component={App}/>
      <Route path='/Signup' component={Signup}/>
      <Route path='/Login' component={Login}/>
      <Route path='/Userpage' component={Userpage}/>
    </Switch>
  </main>
)

export default Routes;