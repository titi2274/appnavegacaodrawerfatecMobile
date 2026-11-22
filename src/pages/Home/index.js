//Importa os componentes View (estrutura) e Text (texto) do React Native
import { View, Text, StyleSheet, Button } from 'react-native';

//Importa o hook useNavigation para controlar navegação entre telas
import { useNavigation } from '@react-navigation/native';

//Cria e exporta o componente chamada "Home"
export default function Home() {
  //Hook que permite acessar funções de navegação
  const navigation = useNavigation();

  //Função que navega para a tela "Detalhes"
  function navegaDetalhes() {
    //Nome da rota definida no sistema de navegação
    navigation.navigate('Detalhes');
  } 

  //Retorna o que será exibido na tela
  return (
    //View funciona como um container (tipo uma div)
    <View style={styles.container}>
      {/* Texto exibido na tela */}
      <Text>Tela HOME</Text>

      {/* Botão que leva para a tela de detalhes */}
      <Button
      title="Ir para detalhes"
      //função direta para abrir a página de detalhes
      onPress={navegaDetalhes}
      />

      <Button
      title="Abrir Drawer"
      //função direta para abrir o drawer
      onPress={() => navigation.openDrawer()}
      />
    </View>
  )
}

//Criação dos estilos utilizando StyleSheet
const styles = StyleSheet.create({
  //Estilo do container principal
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  }
})