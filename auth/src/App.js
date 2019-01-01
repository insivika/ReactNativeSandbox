import firebase from 'firebase';
import React, { Component } from 'react';
import { View } from 'react-native';
import { Header, Button, CardSection, Spinner } from './components/common';
import LoginForm from './components/LoginForm';


class App extends Component {

  state = {
    loggedIn: null
  }

  componentWillMount() {
      firebase.initializeApp({
         
          apiKey: 'AIzaSyCrcmxh1cDneSzP9sRE3PtRYPDiCyenoMw',
          authDomain: 'auth-5c78c.firebaseapp.com',
          databaseURL: 'https://auth-5c78c.firebaseio.com',
          projectId: 'auth-5c78c',
          storageBucket: 'auth-5c78c.appspot.com',
          messagingSenderId: '765706132661'
        
      });

      firebase.auth().onAuthStateChanged((user) => {
        if (user) {
          this.setState({
            loggedIn: true
          });
        } else {
          this.setState({
            loggedIn: false
          });
        }
      });
  }

  renderContent() {
    switch (this.state.loggedIn) {
      case true:
        return (
          <CardSection>
            <Button
            onPress={() => firebase.auth().signOut()}
            >
              Log Out
            </Button>
          </CardSection>
          );
      case false:
         return <LoginForm />;
      default: 
          return <Spinner size="large" />;
            
    }
  }

  render() {
    return (
      <View>
          <Header headerText={'Authentication'} />
          {this.renderContent()}
      </View>    
    );
  }
}

export default App;