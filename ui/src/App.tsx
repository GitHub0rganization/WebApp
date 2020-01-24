import React from 'react';
import {Route, Switch} from 'react-router-dom';
import {Home} from './containers/Home';
import {Login} from './containers/Login';
import {User} from './containers/User';
import {NotFound} from './containers/NotFound';
import {PrivateRoute} from './containers/PrivateRoute';
import {UsersQRCode} from './containers/UsersQRCode';
import {Navbar} from './components/advanced/Navbar';
import {Footer} from './components/advanced/Footer';

const App: React.FC = () => {
  return (
    <div>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/username" component={User} />
        <Route exact path="/username/favorites" component={User} />
        <Route exact path="/username/links" component={User} />
        <PrivateRoute path="/username/qrcode" component={UsersQRCode} />
        <Route path="*" children={<NotFound />} />
      </Switch>
      <Footer />

      {/* // usage of PrivateRoute forces login */}
      {/* // <PrivateRoute path="/hogehoge" component={hoge} /> */}
    </div>
  );
};

export default App;
