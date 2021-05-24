import React from 'react';
import {
  Route as ReactDOMRoute,
  // RouteProps as ReactDOMRouteProps,
  Redirect,
} from 'react-router-dom';

import { useAuth } from '../hooks/Auth';


const Route = ({ isPrivate = false, component: Component, ...rest }) => {
  const { isSigned } = useAuth();
  return (
    <ReactDOMRoute
      {...rest}
      render={({ location }) => {
        return isPrivate === !!isSigned ? (
          <Component />
        ) : (
          <Redirect
            to={{
              pathname: isPrivate ? '/' : '/projetos',
              state: { from: location },
            }}
          />
        );
      }}
    />
  );
};

export default Route;