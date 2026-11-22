//Iporta o React e o hook useLayoutEffect
//useLayoutEffect é usado para alterar algo na tela antes dela ser exibida
import React, { useLayoutEffect } from 'react';

//Importa os componentes View (estrutura) e Text (texto) do React Native
import { View, Text, StyleSheet, Button } from 'react-native';

//Importa o hook de navegação
//Permite acessar funções como navegar entre telas ou alterar o header
import { useNavigation } from '@react-navigation/native';

//Cria e exporta o componente chamada "Sobre"
export default function Sobre() {

  //Hook para acessar a navegação
  const navigation = useNavigation();

  //Retorna o que será exibido na tela
  return (
    //View funciona como um container (tipo uma div)
    <View style={styles.container}>
      {/* Texto exibido na tela */}
      <Text>Páginas Sobre</Text>
    </View>
  )
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
});