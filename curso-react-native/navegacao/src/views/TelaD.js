import React from 'react'
import { Button } from 'react-native'
import TextoCentral from '../components/TextoCentral'

export default props => {
        <View style={{ flex:1 }}>
            <View style={{ flexDirection: 'row',
            justifyContent: 'spacebetween' }}>

                <Button 
                 title='Abrir' 
                    onPress={() => {
                        props.navigation.openDrawer()
                        setTimeout(() => {
                            props.navigation.closeDrawer()
                        setInterval(() => {
                            props.navigation.toggleDrawer()
                        },1000)
                        }, 3000)

                    }}
                />
                <Button 
                 title='Fechar' 
                    onPress={() => props.navigation.closeDrawer()}
                />

            </View>
   
        <View style={{flex:1 }}>
        <TextoCentral corFundo='#33fa72'>
            Tela D
        </TextoCentral>
        </View>
        </View>
    
}