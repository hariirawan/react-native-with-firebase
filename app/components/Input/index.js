/**
* by: Hari Irawan
* @format
* @flow
*/

import React, { Component } from 'react'
import { Text, View, TextInput , StyleSheet} from 'react-native'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

type Input = {
    iconName:String,
    placeholder?:String,
    value?:String,
    onChangeText?:any,
    secureTextEntry?:Boolean
}

export default class index extends Component<Input> {
    render() {
        const {iconName, placeholder, onChangeText, secureTextEntry, value} = this.props;
        return (
        <View style={styles.input}> 
            <Icon name={iconName} size={30} color="#E2E2E2"/>
            <TextInput
                name={name}
                style={styles.textInput}
                onChangeText={onChangeText}
                value={value}
                placeholder={placeholder}
                secureTextEntry={secureTextEntry}
            />
        </View>
        )
    }
}


const styles = StyleSheet.create({
    input:{
        display:'flex',
        flexDirection:'row',
        alignItems:'center',
        paddingHorizontal:5,
        borderColor:'#E2E2E2',
        borderWidth:1,
        borderRadius:50,
        marginVertical:5
    },
    textInput:{
        borderColor:'transparent',
        flex:1
    }

})