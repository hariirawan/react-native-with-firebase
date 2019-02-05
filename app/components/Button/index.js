import React, { Component } from 'react'
import { Text, View, TouchableOpacity, StyleSheet } from 'react-native' 

type Button = {
    label:String,
    onPress:String
}

export default class index extends Component<Button> {
    render() {
        const {label, onPress} = this.props;
        return (
            <TouchableOpacity onPress={onPress}>
                <View style={styles.button}>
                    <Text style={{color:'white'}}>{label} </Text>
                </View>
            </TouchableOpacity>
        )
    }
}


const styles = StyleSheet.create({
    button:{
        display:'flex',
        alignItems:'center',
        backgroundColor:"#18AB66",
        borderRadius:50,
        marginVertical:5,
        padding:15,
    }
})