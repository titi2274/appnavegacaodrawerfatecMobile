//Importa os componentes View (estrutura) e Text (texto) do React Native
import { View, Text } from 'react-native';

//Cria e exporta o componente chamada "Detalhes"
export default function Detalhes() {

  //Retorna o que será exibido na tela
  return (
    //View funciona como um container (tipo uma div)
    <View>
      {/* Texto exibido na tela */}
      <Text>Páginas Detalhes do usuário</Text>
    </View>
  )
}