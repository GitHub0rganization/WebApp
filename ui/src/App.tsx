import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import {Home} from './containers/Home'

const App: React.FC = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/" children={Home} />
      {/* <Route path="/:userId" children={User} />
      <Route path="*" children={<NotFound />} /> */}
    </Switch>
  </BrowserRouter>
);


export default App;
