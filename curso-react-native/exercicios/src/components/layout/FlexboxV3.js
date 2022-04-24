import React from 'react';
import { View, StyleSheet } from 'react-native';
import Quadrado from './Quadrado.'


export default props => {
    return (
        <View style={style.FlexV3}> 
            <Quadrado cor='#F00' lado={10} />
            <Quadrado cor='#1F0' lado={30} />
            <Quadrado cor='#1FE' lado={40} />
            <Quadrado cor='#9EF' lado={50} />
            <Quadrado cor='#72F' lado={90} />

        </View>
        
    )
}

const style = StyleSheet.create({
    FlexV3: {
        flexDirection: "row",
        justifyContent: "space-evenly",
        alignItems: "flex-start",
        height: 350,
        width: '100%',
        backgroundColor: '#000'
    }
})