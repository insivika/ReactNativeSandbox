import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';
import firebase from 'firebase';
import reducers from './reducers';
import LoginForm from './components/LoginForm';


class App extends Component {
  componentWillMount() {
    const config = {
      apiKey: 'AIzaSyDXqV5PGbUSSr_VxZlXqN3L-eLZSIL0CQM',
      authDomain: 'manager-c44cd.firebaseapp.com',
      databaseURL: 'https://manager-c44cd.firebaseio.com',
      projectId: 'manager-c44cd',
      storageBucket: 'manager-c44cd.appspot.com',
      messagingSenderId: '1081116044835'
    };
    firebase.initializeApp(config);
  }

  render() {
    return (
      <Provider store={createStore(reducers, {}, applyMiddleware(ReduxThunk))}>
        <LoginForm />
      </Provider>
    );
  }
}

export default App;
