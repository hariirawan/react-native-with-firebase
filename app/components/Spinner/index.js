/**
* by: Hari Irawan
* @format
* @flow
*/

import React, { Component } from 'react'
import { View, StyleSheet, ActivityIndicator} from 'react-native'

type Spinner ={
    size?:String
}

export default class index extends Component<Spinner> {
    render() {
        const {size} = this.props;
        return (
            <View style={styles.container}>
                <View style={styles.spinner}> 
                    <ActivityIndicator size={size || 'large'} />
                </View>
            </View>
        )
    }
}


const styles = StyleSheet.create({
    container:{
        flex:1,
        position:"absolute",
        left:0,
        top:0,
        bottom:0,
        right:0,
        zIndex:111
    },  
    spinner:{
        flex:1,
        alignItems:'center',
        justifyContent:'center',
        backgroundColor:"#ffffff",
        borderRadius:10,
        opacity:.5
    }
})