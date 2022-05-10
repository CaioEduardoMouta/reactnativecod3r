import React from 'react'

import { View, Text, } from 'react-native'

export default props => {
    return (
        <View style={styles.container}>
            <View style={styles.checkContainer}>

            </View>

        <View>
            <Text>{props.desc}</Text>
            <Text>{props.estimateAt + ""}</Text>
        </View>
        </View>
    )
}

function getCheckView(doneAt) {
    if(doneAt != null) {
        return (
            <View><Text>Concluida</Text></View>
        )
    
    } else {
        return (
            <View><Text>Pendente</Text></View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        borderColor: '#AAA',
        boderBottomWidth: 1,
        alignItems: 'center',
        paddingVertical: 10

    },
    checkContainer: {
        width: '20%'
    }
})
