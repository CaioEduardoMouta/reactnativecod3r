import React, { Component } from "react"
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    TextInput
} from 'react-native'

class Login extends Component {
    state ={
        email: '',
        password: ''
    }

    login = () => {
        this.props.navigation.navigate('Profile')
    }

    render() {
        return (
            <View style={styles.container}>
                <TextInput placeholder="Email" style={styles.input}
                autoFocus={true} keyboardType='email-address'
                value={this.state.email}
                onChangeText={email => this.setState({ email})} />
            </View>
        )
    }
}