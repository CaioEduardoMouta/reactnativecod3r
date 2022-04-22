import React from 'react'
import {View, Text } from 'react-native-web'
import Estilo from './estilo'

export default props => {
  
        return(
            <View>
            <Text style={Estilo}>O resultado é:</Text>
            {num % 2 === 0
                ? <Text style={Estilo.txtG}>Par</Text>
                : <Text style={Estilo.txtG}>Impar</Text>
            }
            </View>
    
        )
}