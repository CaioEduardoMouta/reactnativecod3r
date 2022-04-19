import React from 'react'
import { Text } from 'react-native'
import Estilo from './estilo'

export default props => {
    const delta = props.max
    const aleatorio = parseInt(Math.random() * delta) + props.min
    return (
        <Text style={Estilo.txtG}>
        O valor aleatorio é {aleatorio}
        </Text>
    )
}