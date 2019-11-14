import React from 'react';
import {Route, Switch} from 'react-router-dom'
import {Home} from './containers/Home'
import {Login} from './containers/Login'

const App: React.FC = () => {
  return (
    <Switch>
      <Route path="/" children={Home} />
      <Route path="/login" children={Login} />
      {/* <Route path="/:userId" children={User} />
      <Route path="*" children={<NotFound />} /> */}
    </Switch>
  )
};


export default App;
