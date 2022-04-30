import { StatusBar } from 'expo-status-bar';
import { render } from 'react-dom';
import { StyleSheet, Text, View } from 'react-native';
import { Component } from 'react/cjs/react.production.min';
import Field from './src/components/Field';
import params  from './src/params'
import MineField from './src/components/MineField';

import {
  createMinedBoard
} from './src/functions'

export default class App extends Component {

  minesAmount = () => {
    const cols = params.getColumnsAmount()
    const rows = params.getRowsAmount()
    return Math.ceil(cols * rows * params.difficultLevel)
  }

  createState = () => {
    const cols = params.getColumnsAmount()
    const rows = paras.getRowsAmount()
    return {
      
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>Iniciando o mines</Text>
        <Text style={styles.instructions}>Tananho da grade:
          {params.getRowsAmount()}x{params.getColumnsAmount()}
       
        <Field />
        <Field opened />
        <Field opened nearMines={1} />
        <Field opened nearMines={2} /> 
        <Field opened nearMines={3} /> 
        <Field opened nearMines={6} /> 
        <Field mined />
        <Field mined opened exploded />
        <Field flagged />
        <Field flagged opened />
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
