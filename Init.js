import React from 'react';
import Navigation from "./Navigation";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import { composeWithDevTools, devToolsEnhancer } from "remote-redux-devtools";
import reduxThunk from "redux-thunk";
import firebase from "firebase";
import combineReducers from './reducers';


const store = createStore(combineReducers, composeWithDevTools(applyMiddleware(reduxThunk)));


export default class Init extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    var config = {
      apiKey: "AIzaSyCwcDhPtAKai3eMpexS4yYX7x7oRHy_NNU",
      authDomain: "oia-desenvolvimento.firebaseapp.com",
      databaseURL: "https://oia-desenvolvimento.firebaseio.com",
      projectId: "oia-desenvolvimento",
      storageBucket: "oia-desenvolvimento.appspot.com",
      messagingSenderId: "641988580001"
    };
    firebase.initializeApp(config);
  }
  render() {
    return (
      <Provider store={store}>
        <Navigation />
      </ Provider>
    );
  }
}