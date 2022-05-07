import React from 'react'
import { View, Text, Alert } from 'react-native'
import { FlatList } from 'react-navigation'
import users from '../data/users'
import { ListItem, Buttom, Icon } from 'react-native-elements'

export default props => {

    function confirmUserDeletion(user) {
        Alert.alert('Excluir Usuário', 'Deseja exclior o usuário?', [
            {
                text: 'Sim',
                onPress() {
                    console.warn('delete' + user.id)
                }

            },
            {
                text: 'Não'
            },
        ])
    }

    function getActions(user) {
        return(
            <>
                <Buttom
                    onPress={() => props.navigation.navigate('UserForm', user)}
                    type="clear"
                    icon={<Icon name="edit" size={25} color="orange" />}
                />
                    <Buttom
                    onPress={() => confirmUserDeletion(user)}
                    type="clear"
                    icon={<Icon name="delete" size={25} color="red" />}
                />
            </>
        )

    }

    function getUserItem({ item:user }) {
        return (
            <ListItem 
                leftAvatar={{source: {uri: user.avatarUrl}}}
                key={user.id}
                title={user.name}
                subtitle={user.email}
                butttomDivider
                rightElement={getActions(user)}
                onPress={() => props.navigation.navigate('UserForm', user)} 
            />
        )
    }

    return (
       <View>
           <FlatList 
             keyExtractor={user => user.id.toString()}
             data={users}
           />
       </View>
    )
}
