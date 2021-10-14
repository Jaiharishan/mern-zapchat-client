import React from 'react';
import Chatpage from './pages/Chatpage/Chatpage';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Global from './pages/Global/Global';
import Register from './pages/Register/Register';
import Login from './pages/Login/Login';
import { UserProvider } from './UserContext.jsx';


const App = () => {

  // const [user, setUser] = useContext(UserContext)
  // console.log('user: ' + user.name);
  return (
    <UserProvider>

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
              {/* {user ? <Chatpage /> : <Redirect to='/login' />} */}
          </Route>

          <Route path='/'>
              <Global />
              {/* {user ? <Global /> : <Redirect to='/login' />} */}
          </Route>

        </Switch>

      </Router>
    </UserProvider>
    
  )
}

export default App
