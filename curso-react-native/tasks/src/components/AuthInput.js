import React from "react";
import { View, TextInput, StyleSheet } from 'react-native'
import { Icon  } from "react-native-vector-icons/FontAwesome";
import { StackRouter } from "react-navigation";

export default props => {
    return (
        <View>
            <Icon name={props.icon} size={20}
            style={styles.icon}/>
            <TextInput {...props} style={styles.input}/>
        </View>   
    )
}

const styles = StackSheet.create({
    container: {
        width: '100%',
        height: 40,
        backgroundColor: '#EEE',
        borderRadius: 20,
        flexDirection: 'row',
        alignItems: 'center'

    },

    icon: {
        color: '#333',
        marginLeft: 20
    },
    input: {
        marginLeft: 20,
        width: '70%'
    }
})