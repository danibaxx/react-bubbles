import React from 'react';
import { Route, Redirect } from 'react-router-dom';

export default function ProtectedRoute(props) {
  const {
    component: Component,
    ...rest
  } = props

  return (
    <Route {...rest} render={(renderProps) => {
      if (localStorage.getItem('payload')) {
        return <Component {...renderProps} />
      } else {
        return <Redirect to='/login' />
      }
    }} />
  )
};