import React, { Component } from 'react'
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native'

export default class index extends Component {
  render() {
    const {isCheck, onCheck} = this.props
    return (
        <TouchableOpacity onPress={onCheck}>
            <View style={styles.container}>
                <View style={styles.box}>
                    <View style={{
                        height: 12,
                        width: 12,
                        backgroundColor: isCheck ? '#000' : '#FFF',
                    }} />
                </View>
                <Text> Tampilkan kata sandi </Text>
            </View>
        </TouchableOpacity>
    )
  }
}


const styles = StyleSheet.create({
    container:{
        display:'flex',
        flexDirection:'row',
        marginVertical:5,
        alignItems:'center',
        marginLeft:15
    },  
    box:{
        width:24,
        display:'flex',
        justifyContent:'center',
        alignItems:'center',
        height:24,
        borderWidth:.5,
    }
})