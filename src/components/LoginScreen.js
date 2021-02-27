import React, { Component } from 'react'
import { Text, View, TouchableOpacity, TextInput, StyleSheet } from 'react-native';
import { widthToDp, heightToDp } from './ResponsiveStyle'
// const { width, height } = Dimensions.get('window');
export default class LoginScreen extends Component {

    navToRegister = () => {
        this.props.navigation.navigate('SignUp')
    }
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.loginForm}>
                    <Text style={styles.inputext}>Sample Login Form</Text>
                    <TextInput
                        //   value={this.state.username}
                        //   onChangeText={(username) => this.setState({ username })}
                        label='Email'
                        style={styles.input}
                    />
                    <TextInput
                        //   value={this.state.password}
                        //   onChangeText={(password) => this.setState({ password })}
                        label='Password'
                        secureTextEntry={true}
                        style={styles.input}
                    />
                    <View style={styles.button}>
                        <TouchableOpacity
                            style={{backgroundColor: 'red' }}
                            onPress={() => { alert('hello') }}
                        >
                        <Text style={{textAlign: 'center', color:'white',fontWeight:'bold',padding: heightToDp('2.2')}}>LOGIN</Text>
                        </TouchableOpacity>
                        <TouchableOpacity >
                        <Text style={{textAlign: 'center',color:'blue' ,padding: heightToDp('2.2')}}>Dont't have an account ? Signup</Text>
                            </TouchableOpacity>
                    </View>
                </View>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#FFFFFF',
    },
    loginForm: {
        // borderWidth: widthToDp('0.5'),
        // padding: widthToDp('3'),
    },
    input: {
        margin: widthToDp('2'),
        width: widthToDp(90),
        padding: widthToDp('2'),
        borderWidth: widthToDp('0.3'),
        borderColor: "#20232a",

    },
    button: {
        margin: widthToDp('2'),

        width: widthToDp('90')
    },
    inputext: {
        textAlign: 'center'
    },
});


