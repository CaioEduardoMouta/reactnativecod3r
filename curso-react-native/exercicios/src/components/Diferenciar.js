import React from 'react'
import { Text, Platform } from 'react-native-web'
import Estilo from './estilo'

export default props => {
    if(Platform.OS === 'andriod') {
    return <Text style={Estilo.txtG}>Android</Text>
} else if(Platform.OS === 'ios') {
    return <Text style={Estilo.txtG}>IOS</Text> 
} else {
    return <Text style={Estilo.txtG}>Eita!!!</Text>
}
}