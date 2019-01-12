import React, { Component } from 'react';
import { connect } from 'react-redux';
import { emailChange, passwordChange, loginUser } from '../actions';
import { Card, CardSection, Input, Button } from './common';

class LoginForm extends Component {

  onEmailChange = (text) => {
    this.props.emailChange(text);
  }

  onPassWordChange = (text) => {
    this.props.passwordChange(text);
  }

  onButtonPress = () => {
    const { email, password } = this.props;

    this.props.loginUser({ email, password });
  }

  render() {
    return (
         <Card>
          <CardSection>
            <Input 
              label="Email"
              placeholder="email@gmail.com"
              onChangeText={this.onEmailChange}
              value={this.props.email}
            />
          </CardSection>

          <CardSection>
              <Input 
               secureTextEntry
               label="Password"
               placeholder="password"
               onChangeText={this.onPassWordChange}
               value={this.props.password}
              />
          </CardSection>

          <CardSection>
              <Button onPress={this.onButtonPress}>
                Login
              </Button>
          </CardSection>
        </Card>
    );
  }
}

const mapStateToProps = state => {
  const { auth } = state;

  return {
    email: auth.email,
    password: auth.password
  };
};

export default connect(mapStateToProps, { 
    emailChange, 
    passwordChange, 
    loginUser 
  })(LoginForm);
