import React from 'react';
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom'
import Keephome from './components/Keephome';
import InputKeephome from './components/InputKeephome';
import Image from './components/Image';
import Form from './components/Form';
import Search from './components/Search';
import Location from './components/Location';
import Login from './components/auth/Login/Login';
import Register from './components/auth/Register/Registration';



function App() {
  return (
<Router>
      <Switch>


        <Route path='/register' component={Register}/>
		    <Route path='/login' component={Login}/>
        <Route path='/keephome' component={Keephome}/>
        <Route path='/inputkeephome' component={InputKeephome}/>
        <Route path='/image' component={Image}/>
        <Route path='/form' component={Form}/>
        <Route path='/search' component={Search}/>
        <Route path='/location' component={Location}/>


       
      </Switch>

    </Router>
  );
}

export default App;