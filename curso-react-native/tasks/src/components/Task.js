import React from 'react'

import { View, Text,  StyleSheet, TouchableWithoutFeedback} from 'react-native'
import Icom from 'react-native-vector-icons/FontAwesome'

import moment from  'moment'

import 'moment/locale/pt'

import commonStyles from '../commonStyles'

export default props => {

    const doneOrNotStyle = props.doneAt != null ?
        { textDecorationLine: 'line-through'} : {}

        const date = props.doneA ? props.doneAt : props.estimateAt

    const formattedDate = moment(props.estimateAt).locale('pt-br')    
        .format('ddd, D [de] MMMM')

    return (
        <View style={styles.container}>
            <TouchableWithoutFeedback
            onPress={() => props.toggleTask(props.id)}>
            <View style={styles.checkContainer}>
                {getCheckView(props.doneAt)}
            </View>
            </TouchableWithoutFeedback>

        <View>
            <Text style={[styles.desc, doneOrNotStyle]}>{props.desc}</Text>
            <Text style={styles.date}>{formattedDate}</Text>
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
        width: '20%',
        alignItems: 'center',
        justifyContent: 'center'
    },

    pending: {
        height: 25,
        width: 25,
        borderRadius: 13,
        borderWidth: 1,
        borderColor: '#555'
    },
    done: {
        height: 25,
        width: 25,
        borderRadius: 13,
        alignItems: 'center',
        justifyContent: 'center'
    },
    desc: {
        fontFamily: commonStyles.fontFamily,
        color: commonStyles.colors.mainText,
        fontSize: 15
    },

    date: {
        fontFamily: commonStyles.fontFamily,
        color: commonStyles.colors.subText,
        fontSize: 12
    }
    
})
