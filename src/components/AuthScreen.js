import React, { Component } from 'react'
import {Text, View, Button, StyleSheet} from 'react-native';
export default class AuthScreen extends Component {
    nav = () => {
        this.props.navigation.navigate('Login');
    }
    render() {
        return (
            <>
               <Text>Auth Screen</Text> 
               <Button title="Login" onPress={this.nav} />
               
            </>
        )
    }
}
