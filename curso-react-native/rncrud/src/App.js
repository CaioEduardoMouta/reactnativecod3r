import React from 'react'
import {NavigationContainer} from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack';
import UserList from './views/UserList'

const Stack = createStackNavigator()

export default props => {
    return (
       <NavigationContainer>
           <Stack.Navigator
                initialRouteName="UserList">
               <Stack.sreen
                    name="UserList"
                    component={UserList}
               />

                <Stack.sreen
                    name="UserForm"
                    component={UserForm}
               />
           </Stack.Navigator>
       </NavigationContainer>
    )
}
