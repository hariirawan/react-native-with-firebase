import React, { Component, Fragment } from 'react';
import firebase from 'firebase';

import {Login, Home} from './screens'
import { Spinner } from './components';

export default class App extends Component {
  constructor(props){
    super(props);
    this.state ={
      isLoggedIn :null
    }
  }
  componentDidMount =() => {
    firebase.initializeApp({
      apiKey: "AIzaSyAmg-AtVxL4--Zk6-H4cSlKTXGmWecivF8",
      authDomain: "ngekos-42016.firebaseapp.com",
      databaseURL: "https://ngekos-42016.firebaseio.com",
      projectId: "ngekos-42016",
      storageBucket: "ngekos-42016.appspot.com",
      messagingSenderId: "1056622288242"
    });

    firebase.auth().onAuthStateChanged((user) => {
      if(user) {
        this.setState({isLoggedIn:true})
      }else{
        this.setState({isLoggedIn:false})
      }
    })
  }

  renderScreen =()=>{
    const {isLoggedIn} = this.state ;
    switch(isLoggedIn){
      case true:
        return <Home />;
      case false:
        return <Login />;
      default :
        return <Spinner />;
    }
  }

  render() {
    return (
    <Fragment>
      {this.renderScreen()}
    </Fragment>)
  }
}

