import React from 'react'
import { View, Text } from 'react-native'
import { FlatList } from 'react-navigation'
import users from '../data/users'
import { ListItem } from 'react-native-elements'

export default props => {

    function getUserItem({ item:user }) {
        return (
            <ListItem 
                leftAvatar={{source: {uri: user.avatarUrl}}}
                key={user.id}
                title={user.name}
                subtitle={user.email}
                butttomDivider
                onPress={() => props.navigation.navigate('UserForm')} 
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
