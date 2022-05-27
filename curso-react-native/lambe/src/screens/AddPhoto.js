import React, {Component} from 'react'

import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    TextInput,
    Image,
    Dimensions,
    Platform,
    ScrollView,
    Alert
} from 'react-native'

import ImagePicker from 'react-native-image-picker'

class AddPhoto extends Component {
    state ={
        image: null,
        comment: '',
    }

    pickImage = () => {
        ImagePicker.showImagePicker({
            title:'Escolha a imagem',
            maxHeight: 600,
            maxWidth: 800
        }, res => {
            if(!res.didCancel) {
                this.setState({ image: { uri: res.uri, base64: res.data }})

            }
        })
    }

    save = async () => {
        Alert.alert('Imagem adicionada', this.state.comment)
    }

    render() {
        return (
            <ScrollView>
                <View style={styles.container}>
                    <text style={styles.title}>Compartilhe uma image</text>
                    <View style={styles.imageContainer}>
                        <Image source={this.state.image} style={styles.image} />
                    </View>
                    <TouchableOpacity onPress={this.pickImage} style={styles.button}>
                        <Text style={styles.buttonText}> Escolha a foto </Text>
                    </TouchableOpacity>
                    <TextInput placeholder='Algum comentário para a foto?'
                        style={styles.input} value={this.state.comment}
                        onChangeText={comment => this.setState({ comment})} />
                    <TouchableOpacity    onPress={this.save} style={styles.button}>
                        <Text style={styles.buttonText}>Salvar</Text>    
                    </TouchableOpacity> 
                </View>
            </ScrollView>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center'
    },
    title: {
        fontSize: 20,
        
    }
})