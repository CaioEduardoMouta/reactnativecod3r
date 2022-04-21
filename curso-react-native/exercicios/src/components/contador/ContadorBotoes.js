import React from 'react'

import { View, Button, StyleSheet } from 'react-native-web'

export default props => {
    return (
        <View>
            <Button title="+" onPress={props.inc} />
            <Button title="-" onPress={props.dec} />
        </View>
    )
}

const style = StyleSheet.create({
    Botoes: {
        flexDirection: "row"
    }
})