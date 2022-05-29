import React, { Component } from 'react'
import { StyleSheet, FlatList, View } from 'react-native'
import Header from '../components/Header'
import Post  from '../components/Post'

class Feed extends Component {
    state = { 
        posts: [{
            id: Math.random(),
            nickmame: 'Caio Mouta',
            email: 'caiomouta@gmail.com',
            image: require('../../assets/imgs/fence.jpg'),
            comments: [{
                nickname: 'Carrazedo',
                comment: 'Stunning'
            }, {
                nickmame: 'Monteiro',
                comment: 'Orra'
            }]
        }, {
            id: Math.random(),
            nickmame: 'Francisco Leandro Lima',
            email: 'fllima@gmail.com',
            Image: require('../../assets/imgs/bw.jpg'),
            comments:[]
        }]
    }

    render() {
        return (
            <View style={styles.container}>
                <Header />
                <FlatList
                    data={this.state.posts}
                    keyExtractor={item => `${item.id}`}
                    renderItem={({ item  }) =>
                        <Post key={item.id} {...item} /> } />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    }
})

export default Feed