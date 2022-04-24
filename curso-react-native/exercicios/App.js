
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import * as React from 'react';

import { SafeAreaView } from 'react-native-web'

import Mega from './src/components/mega/Mega';
//import FlexboxV4 from './src/components/layout/FlexboxV4';
//import FlexboxV3 from './src/components/layout/FlexboxV3';

//import FlexboxV1 from './src/components/layout/FlexboxV1';

//import Quadrado from './src/components/layout/Quadrado.';

//import DigiteSeuNome from './src/components/DigiteSeuNome';

//import ListaProdutos from './components/produtos/ListaProdutos';
//import ListaProdutosV2 from './components/produtos/ListaProdutosV2';

//import UsuarioLogado from './components/UsuarioLogado';

//import Familia from './components/relacao/Familia'
//import Membro from './components/relacao/Membro'
//import Diferenciar from './components/Diferenciar';

//import ParImpar from './components/ParImpar';

//import ContadorV2 from './components/contador/ContadorV2'

//import Pai from './components/indireta/Pai'

//import Contador from './components/Contador';
//import Botao  from './components/Botao';
//import Aleatorio from './src/components/Aleatorio';
//import MinMax from './src/components/MinMax'
//import X, { Comp1,Comp2 } from './src/components/Multi'
//import Primeiro from './src/components/Primeiro'

//import Titulo from './src/components/Titulo'


export default () => (
    <SafeAreaView style={style.App}>
           <Mega qtdeNumeros={21}/>
        {
             /*    
             <FlexboxV4 />
              <FlexboxV2 /> 
              <DigiteSeuNome />  
             <ListaProdutosV2/> 
             <ListaProdutos/>
             <UsuarioLogado usuario={{nome: 'Martins', email:'martins@mar.com'}} />
               <Familia>
                <Membro nome="Eduardo" sobrenome="Mouta"/>
                <Membro nome="Marlene" sobrenome="Mouta"/>
          </Familia>
          <Familia>
                <Membro nome="Caio" sobrenome="Carrazedo"/>
                <Membro nome="Maya" sobrenome="Mouta" />
          </Familia>*/
            //<ParImpar num={3} />
            //<Diferenciar />
            //<ContadorV2 />
           // <Pai />
    //<Contador inical={100} passo={13}/>
    //<Botao />
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
         </SafeAreaView>
  )
   

        





const style = StyleSheet.create({
    App: {
        flexGrow: 1,
        justifyContent: "center",
        alignItems: "center",
        padding: 20,
    }
})
