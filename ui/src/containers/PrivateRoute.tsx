import React, {useEffect, useState} from 'react';
import {Route} from 'react-router-dom';
import {checkAuth} from '../services/AuthService';
import {Login} from './Login';

type Props = {
  path: string;
  component: () => JSX.Element;
};

export const PrivateRoute = (props: Props) => {
  const [loading, setLoading] = useState(true);
  const [auth, setAuth] = useState(false);

  const stateChange = () => {
    setLoading(false);
    setAuth(true);
  };

  const backToLogin = () => {
    return <Login />;
  };

  useEffect(() => {
    const ok = checkAuth();
    ok ? stateChange() : backToLogin();
  }, []);

  if (loading) {
    // TODO: make it component
    return <h1>Loading...</h1>;
  }

  if (auth) {
    return <Route exact path={props.path} component={props.component} />;
  } else {
    return <Login />;
  }
};
