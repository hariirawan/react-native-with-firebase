/**
* by: Hari Irawan
* @format
* @flow
*/

import React, { Component } from 'react'
import { View, StyleSheet, ActivityIndicator} from 'react-native'

type Spinner ={
    size?:String,
    children?:any
}

export default class index extends Component<Spinner> {
    render() {
        const {size, children} = this.props;
        return (
            <View style={styles.container}>
                <View style={styles.spinner}> 
                    <ActivityIndicator size={size || 'large'} />
                </View>
                {children}
            </View>
        )
    }
}


const styles = StyleSheet.create({
    container:{
        position:'relative'
    },  
    spinner:{
        position:'absolute',
        flex:1,
        top:0,
        bottom:0,
        alignItems:'center',
        justifyContent:'center',
        left:0,
        right:0,
        backgroundColor:"#ffffff",
        opacity:.5,
        zIndex:1
    }
})