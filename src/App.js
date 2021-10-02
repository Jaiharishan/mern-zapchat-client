import React from 'react';
import Chatpage from './pages/Chatpage/Chatpage';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Global from './pages/Global/Global';


const App = () => {
  return (
    <Router >
    
       <Switch>

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
