import React from 'react';
import logo from './logo.svg';
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom'

import Login from './components/auth/Login';
import Registration from './components/auth/Registration';
import Dashboard from './components/Dashboard';
import InputForm from './card/InputForm';
import BearList from './card/BearList';
import Keephome from './components/Keephome';
import InputKeephome from './components/InputKeephome';



function App() {
  return (
<Router>
      <Switch>


        <Route  path='/register' component={Registration}/>
		    <Route  path='/login' component={Login}/>
        <Route path='/dashboard' component={Dashboard}/>
        <Route path='/keephome' component={Keephome}/>
        <Route path='/inputform' component={InputForm}/>
        <Route path='/bearlist' component={BearList}/>
        <Route path='/inputkeephome' component={InputKeephome}/>


       
      </Switch>

    </Router>
  );
}

export default App;