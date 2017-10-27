import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Layout from '../containers/Layout/Layout';
import Home from '../containers/Home/Home';
import AddMovie from '../containers/AddMovie/AddMovie';

export default (
  <Layout>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/new" component={AddMovie} />
    </Switch>
  </Layout>
);
