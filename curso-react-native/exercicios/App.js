import { StatusBar } from 'expo-status-bar';
import React from 'react'
import {View, StyleSheet } from 'react-native'
import Botao  from './src/components/Botao';
//import Aleatorio from './src/components/Aleatorio';
//import MinMax from './src/components/MinMax'
//import X, { Comp1,Comp2 } from './src/components/Multi'
//import Primeiro from './src/components/Primeiro'

//import Titulo from './src/components/Titulo'


export default () => {
    <View style={style.App}>
        <Botao />
    </View>
    // <View style={style.App}>
    //     <View style={style.App}>
    //         <Titulo principal="Cadastro"
    //             segundario="Tela de Cadastro do Produto"/>
    //             {}
    //     </View>
    //     <Aleatorio min={1} max={60} />
    //     <Aleatorio min={1} max={60} />
    //     <Aleatorio min={1} max={60} />
    //     <Aleatorio min={1} max={60} />
    //     <Aleatorio min={1} max={60} />
    //     <Aleatorio min={1} max={60} />
    //     <MinMax min={3} max={20} />
    //     <MinMax min={1} max={93} />
    //     <X />
    //     <Comp1 />
    //     <Comp2 />
    //     <Primeiro />
    //     <StatusBar style="auto" />
    // </View>
}

const style = StyleSheet.create({
    App: {
        flexGrow: 1,
        justifyContent: "center",
        alignItems: "center",
        padding: 20,
        textAlign: "center"
    }
})