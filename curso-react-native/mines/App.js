import { StatusBar } from 'expo-status-bar';
import { render } from 'react-dom';
import { StyleSheet, Text, View } from 'react-native';
import { Component } from 'react/cjs/react.production.min';
import Field from './src/components/Field';
import params  from './src/params'

export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>Iniciando o mines</Text>
        <Text style={styles.instructions}>Tananho da grade:
          {params.getRowsAmount()}x{params.getColumnsAmount()}
       
        <Field />
        </Text>
      </View>
    );
  }
 
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
});
