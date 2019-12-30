import React from 'react';
import {Route, Switch} from 'react-router-dom';
import {Home} from './containers/Home';
import {Login} from './containers/Login';
import {User} from './containers/User';
import {NotFound} from './containers/NotFound';
import {PrivateRoute} from './containers/PrivateRoute';

const App: React.FC = () => {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/login" component={Login} />
      <Route path="/username" component={User} />
      <Route exact path="/username/favorites" component={User} />
      <Route exact path="/username/links" component={User} />
      <Route path="*" children={<NotFound />} />
    </Switch>
    // usage of PrivateRoute forces login
    // <PrivateRoute path="/hogehoge" component={hoge} />
  );
};

export default App;
