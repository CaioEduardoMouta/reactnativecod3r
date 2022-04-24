import React from 'react';
import { View, StyleSheet } from 'react-native';
import Quadrado from './Quadrado.'


export default props => {
    return (
        <View style={style.FlexV1}> 
            <Quadrado cor='#F00' />
            <Quadrado cor='#0F0' />
            <Quadrado cor='#099' />
            <Quadrado cor='#9EF' />
            <Quadrado cor='#72F' />

        </View>
        
    )
}

const style = StyleSheet.create({
    FlexV1: {
        flex: 1,
        justifyContent: "space-between",
        backgroundColor: '#000'
    }
})