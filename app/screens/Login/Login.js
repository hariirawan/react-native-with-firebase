import React, { Component } from 'react'
import firebase from 'firebase';
import { View, Image, Text, ToastAndroid } from 'react-native'
import LinearGradient from 'react-native-linear-gradient';

import {styles} from './Login.style';
import {Input, Button, Checkbox, Spinner} from '../../components'
import Icon from '../../assets/icon/icon_ngekos.png';

export default class Login extends Component {
    state ={
        isCheck:false,
        fields:{
            email:"",
            password:""
        },
        errors:{
            code:"",
            message:""
        },
        loading:false
    }

    onChangeText =(name, e) => {
        let fields = this.state.fields;
        fields[name] = e;
        this.setState({fields})
    }

    onCheck =()=> {
        this.setState({isCheck:!this.state.isCheck})
    }


    handleSubmit =() => {
        const {fields} = this.state
        const {email, password} = fields;
        this.setState({loading:true})

        setTimeout(() => {
            firebase.auth().signInWithEmailAndPassword(email, password)
                .then(this.loginSuccess())
                .catch((errors) => {
                    this.loginFailed(errors)
                })

        }, 3000)
    }

    loginFailed =(errors)=> {
        this.setState({errors, loading:false})
        ToastAndroid.show(errors.message, ToastAndroid.LONG)
    }

    loginSuccess =()=> {
        this.setState({
            fields:{ email:"", password:"" },
            errors:{ code:"", message:"" },
            loading:false
        })
    }

    renderButton =()=> {
        const {loading} = this.state;
        if(loading){
            return <Spinner size="small"/>
        }
        return <Button label="Masuk" onPress={this.handleSubmit}/>
    }

    render() {
        const {isCheck, fields, errors} = this.state;
        return (
        <View style={styles.container}>
            <LinearGradient colors={["#079753","#00D16F"]} >
                <View style={styles.bgCard}>
                    <View style={{padding:5, backgroundColor:'#ffffff', borderRadius:10}}>
                        <Image source={Icon} />
                    </View>
                </View>
            </LinearGradient>
            <View style={styles.form}>
                <Input 
                    placeholder="Nomor Telepon atau email" 
                    iconName='account' 
                    onChangeText={this.onChangeText.bind(this, "email")}
                    value={fields.email}
                    />

                <Input 
                    placeholder="Kata Sandi" 
                    iconName='fingerprint' 
                    value={fields.password}
                    onChangeText={this.onChangeText.bind(this, "password")}
                    secureTextEntry={true}/>

                <Checkbox 
                    isCheck={isCheck} 
                    onCheck={this.onCheck} />

                {this.renderButton()}
                
            </View>
        </View>
        )
    }
}
