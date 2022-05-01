
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import TelaA from '../views/TelaA'
import TelaB from '../views/TelaA'
import TelaC from '../views/TelaA'

const Stack = createNativeStackNavigator()

export default props => {
    <Stack.Naigator initialRouteName="TelaA"
        screenOptions={{ headerShow: false }}>
        <Stack.Screen name="TelaA"
        options={{ title: 'Informações iniciais'}}
        component={TelaA} />
        <Stack.Screen name="TelaB" component={TelaB} />
        <Stack.Screen name="TelaC" component={TelaC} />
    </Stack.Naigator>
}