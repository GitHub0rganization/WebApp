import React from 'react';
import {Route, Switch} from 'react-router-dom'
import {Home} from './containers/Home'
import {Login} from './containers/Login'
import {User} from './containers/User'
import {NotFound} from './containers/NotFound'
import {FriendsList} from './containers/FriendsList'

const App: React.FC = () => {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/login" component={Login} />
      <Route exact path="/username" component={User} />
      <Route exact path="/username/friends" component={User} />
      <Route path="*" children={<NotFound />} />
    </Switch>
  )
};

export default App;
