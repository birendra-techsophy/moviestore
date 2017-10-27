import React from 'react';
import { Provider } from 'react-redux';

import configureStore from '../store/movieStoreStore';
import HelloWorldContainer from '../containers/MovieStoreContainer';
import Header from '../components/Header/Header';

const HelloWorldApp = (props, _railsContext) => (
  <Provider store={configureStore(props)}>
    <Header />
  </Provider>
);

export default HelloWorldApp;
