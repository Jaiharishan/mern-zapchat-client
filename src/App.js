import React from 'react';
import Chatpage from './pages/Chatpage/Chatpage';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Global from './pages/Global/Global';
import Register from './pages/Register/Register';
import Login from './pages/Login/Login';
const App = () => {
  return (
    <Router >
    
       <Switch>

          <Route path='/register'>
              <Register />
          </Route>


          <Route path='/login'>
              <Login />
          </Route>

          <Route path='/chat'>
              <Chatpage />
          </Route>

          <Route path='/'>
              <Global />
          </Route>

          <Route path='/z'>
            <div>hi z!</div>
          </Route>

       </Switch>

    </Router>
   
  )
}

export default App
