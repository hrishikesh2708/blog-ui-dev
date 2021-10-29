/**
 *
 * App
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 */

import React from 'react';
import { Helmet } from 'react-helmet';
import { Route, Switch } from 'react-router';
import LoginPage from '../LoginPage';
import GlobalStyle from '../../global-styles';

export default function App() {
  return (
    <>
      <Helmet
        titleTemplate="%s - React.js Boilerplate"
        defaultTitle="Memior-ify"
      >
        <meta name="description" content="A React.js Boilerplate application" />
      </Helmet>
      <GlobalStyle />
      <Switch>
        <Route path="/" exact component={LoginPage} />
      </Switch>
    </>
  );
}
