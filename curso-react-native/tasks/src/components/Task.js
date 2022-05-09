import React from 'react'

import { View, Text, } from 'react-native'

export default props => {
    return (
        <View>
            <Text>{props.desc}</Text>
            <Text>{props.estimateAt + ""}</Text>
            <Text>{props.doneAt + ""}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        borderColor: '#AAA',
        boderBottomWidth: 1,

    }
})
