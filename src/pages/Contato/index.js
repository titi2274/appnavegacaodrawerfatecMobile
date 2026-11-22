//Importa o React (necessário para criar componentes)
import React from 'react';

//importa componentes do React Native:
//View (container), Text (texto), StyleSheet (estilos), Button (botão)
import { View, Text, StyleSheet, Button } from 'react-native';

//Cria e exporta o componente chamado "Contato"
export default function Contato() {

  //Retorna o que será exibido na tela
  return (

    //View principal da tela com estilo aplicado
    <View style={styles.container}>
      {/* Texto exibido na tela */}
      <Text> Página Contato </Text>
    </View>
  )
}

//Criação dos estilos utilizando StyleSheet
const styles = StyleSheet.create({
  //Estilo do container principal
  container: {
    flex: 1,
    alignItems: 'center',
  }
})