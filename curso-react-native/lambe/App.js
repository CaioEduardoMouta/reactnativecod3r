import React, { Component } from 'react'
import Header from './src/components/Header'
import { View } from 'react-native'
import Post from './src/components/Post'

export default class App extends Component {
  render() {
    const comments =[{
      nickname: 'Carrazedo',
      Comment: 'Boa'
    }, {
      nickname: 'Mouta',
      Comment: 'Isso AI'
    }]

    return (
      <View style={{flex: 1}}>
        <Header />
        <Post image={require('./assets/imgs/fence.jpg')} 
              comments={comments} />
      </View>
 
    )
}
}

