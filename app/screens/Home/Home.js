import React, { Component , Fragment} from 'react'
import firebase from 'firebase'
import { Text, View, StyleSheet, Image } from 'react-native'
import {Button, Input} from '../../components';
import LinearGradient from 'react-native-linear-gradient';

export default class Home extends Component {
    state ={
        displayName:"", 
    }

    componentDidMount =()=> {
        var user = firebase.auth().currentUser;
        const {displayName} = user;
        this.setState({displayName});
    }

    logout =()=> {
        firebase.auth().signOut();
    }
    render() {
        const {displayName} = this.state;
        return (
            <Fragment>
                <View style={styles.container}>
                    <Text style={{fontSize:20, textAlign:'center', marginBottom:10}}>Hallo {displayName}</Text>
                    <Button label="Keluar" onPress={this.logout}/>
                </View>
            </Fragment>
        )
    }
}


const styles = StyleSheet.create({
    container:{
        display:'flex',
        flex:1,
        justifyContent:'center',
        paddingHorizontal:40
    }
})