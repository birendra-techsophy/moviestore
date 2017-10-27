import ReactOnRails from 'react-on-rails';
import React from 'react';
import { browserHistory} from "react-router";
import { Provider } from 'react-redux';

import configureStore from '../store/movieStoreStore';
// import Header from '../components/Header/Header';
import { BrowserRouter as Router } from 'react-router-dom';
import injectTapEventPlugin from 'react-tap-event-plugin';

// import npm module css
// import 'font-awesome/css/font-awesome.css';

// import custom react component
import routes from '../routes/routes';

// Needed for onTouchTap
// http://stackoverflow.com/a/34015469/988941
// injectTapEventPlugin();
const store = configureStore();

export default class MovieStoreApp extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <Router history={browserHistory}>{routes}</Router>
      </Provider>
    )
  }
};

// This is how react_on_rails can see the HelloWorld in the browser.
ReactOnRails.register({
  MovieStoreApp,
});
