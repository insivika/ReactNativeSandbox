import firebase from 'firebase';
import { EMAIL_CHANGED, PASSWORD_CHANGED } from './types';


export const emailChange = (text) => {
  return {
    type: EMAIL_CHANGED,
    payload: text
  };
};

export const passwordChange = (text) => {
  return {
    type: PASSWORD_CHANGED,
    payload: text
  };
};

export const loginUser = ({ email, password }) => {
  return (dispatch) => {
    firebase.auth().signInWithEmailAndPassword(email, password)
    .then(user => {
      dispatch({ tpye: 'LOGIN_USER_SUCCESS', payload: user });
    });
  };
};

