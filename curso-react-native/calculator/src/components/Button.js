import React from 'react'

import {
    StyleSheet,
    Text,
    Dimensions,
    TouchableHighlight
} from 'react-native'

const styles = StyleSheet.create({
    button: {
        fontSize:40,
        height: Dimensions.get('window').width / 4,
        width: Dimensions.get('window').width / 5,
        padding: 20,
        backgroundColor: '#f0f0f0',
        textAlign: 'center',
        borderWidth: 2,
        borderColor: '#888',
        
    },
    operationButton: {
        color: '#fff',
        backgroundColor: '#fa8231',

    },

    buttonDouble: {
        width: (Dimensions.get('window').width / 4) * 3,
    },

    buttonTriple: {
        width: (Dimensions.get('window').width / 4) * 4,
    },

   
})

export default props => {
    const StylesButton = [styles.button]
    if (props.double) StylesButton.push(styles.buttonDouble)
    if (props.triple) StylesButton.push(styles.buttonTriple)
    if (props.operation) StylesButton.push(styles.operationButton)
    return (
    <TouchableHighlight onPress={() => props.onClick(props.label)}>
            <Text style={StylesButton}>{props.label}</Text>
    
    </TouchableHighlight>
    )
}