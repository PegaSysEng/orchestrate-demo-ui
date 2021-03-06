import React from 'react';
import { Switch, Redirect } from 'react-router-dom';

import { RouteWithLayout } from './components';
import { Main as MainLayout, Minimal as MinimalLayout } from './layouts';

import {
  Homepage as HomepageView,
  Accounts as AccountsView,
  Contracts as ContractsView,
  Consumer as ConsumerView,
  Networks as NetworksView,
  Faucets as FaucetsView,
  Transactions as TransactionsView,
  Help as HelpView,
  SignIn as SignInView,
  NotFound as NotFoundView
} from './views';

const Routes = () => {
  return (
    <Switch>
      <Redirect
        exact
        from="/"
        to="/home"
      />
      <RouteWithLayout
        component={HomepageView}
        exact
        layout={MainLayout}
        path="/home"
      />
      <RouteWithLayout
        component={AccountsView}
        exact
        layout={MainLayout}
        path="/accounts"
      />
      <RouteWithLayout
        component={ContractsView}
        exact
        layout={MainLayout}
        path="/contracts"
      />
      <RouteWithLayout
        component={ConsumerView}
        exact
        layout={MainLayout}
        path="/consumer"
      />
      <RouteWithLayout
        component={NetworksView}
        exact
        layout={MainLayout}
        path="/networks"
      />
      <RouteWithLayout
        component={FaucetsView}
        exact
        layout={MainLayout}
        path="/faucets"
      />
      <RouteWithLayout
        component={TransactionsView}
        exact
        layout={MainLayout}
        path="/transactions"
      />
      <RouteWithLayout
        component={HelpView}
        exact
        layout={MainLayout}
        path="/help"
      />
      <RouteWithLayout
        component={SignInView}
        exact
        layout={MinimalLayout}
        path="/sign-in"
      />
      <RouteWithLayout
        component={NotFoundView}
        exact
        layout={MinimalLayout}
        path="/not-found"
      />
      <Redirect to="/not-found" />
    </Switch>
  );
};

export default Routes;
