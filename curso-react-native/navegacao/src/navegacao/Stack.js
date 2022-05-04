import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import TelaA from '../views/TelaA'
import TelaB from '../views/TelaA'
import TelaC from '../views/TelaA'
import PassoStack from '../components/PassoStack';

const Stack = createNativeStackNavigator()

export default props => {
    <Stack.Naigator initialRouteName="TelaA"
        screenOptions={{ headerShow: false }}>
        <Stack.Screen name="TelaA"
        options={{ title: 'Informações iniciais'}}>
        {props => (
            <PassoStack {...props} avancar="TelaB">
                <TelaA />
            </PassoStack>
        )}
        </Stack.Screen>    
        <Stack.Screen name="TelaB">
        {props => (
            <PassoStack {...props} voltar avancar="TelaC" 
            avancarParams={{numero: 1007}}>
                <TelaB />
            </PassoStack>
        )}
        </Stack.Screen>
        <Stack.Screen name="TelaC">
            {props => (
                <PassoStack {...props} voltar avancar="TelaC">
                    <TelaC {...props} />
                </PassoStack>
            )}
        </Stack.Screen>    
    </Stack.Naigator>
}