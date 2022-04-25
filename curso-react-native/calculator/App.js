import { StatusBar } from 'expo-status-bar';
import React, {Component} from 'react';
import { render } from 'react-dom';
import { StyleSheet, Text, View } from 'react-native';


export default  App extends Component {
  render() {
  return (
    <View style={styles.container}>
      <Texf ></Text>
      <StatusBar style="auto" />
    </View>
  );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
