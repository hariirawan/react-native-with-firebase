import React, { Component } from 'react';
import { Text, View, SafeAreaView } from 'react-native';
import firebase from 'firebase'
import HomeNavigation from './Navigation/HomeNavigation';

export default class Home extends Component {
  componentDidMount =()=> {
    firebase.auth().onAuthStateChanged(user => {
      console.log(user)
    })
  }

  render() {
    return (
      <SafeAreaView style={{flex:1}}>
        <HomeNavigation/>
      </SafeAreaView>
    )
  }
}
