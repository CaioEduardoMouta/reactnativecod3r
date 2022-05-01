import { AppRegistry } from 'react-native';
import registerRootComponent from 'expo/build/launch/registerRootComponent';
import Navegacao from './src/navegacao'
import {name as appName} from './app.json';


AppRegistry.registerRootComponent(appName,() => App)
