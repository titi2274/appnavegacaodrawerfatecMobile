//Importa a função para criar navegação do tipo Stack (pilha)
//Esse tipo de navegação funciona como "empilhar telas" (uma sobre a outra)
import { createNativeStackNavigator } from '@react-navigation/native-stack';

//Importa as telas que serão usadas na navegação
import Home from '../pages/Home';
import Detalhes from '../pages/Detalhes';

//Cria o objeto Stack que será usado para configurar as rotas
const Stack = createNativeStackNavigator();

//Cria e exporta o componente responsável pelas rotas do tipo Stack
export default function StackRoutes() {

  return (
    //Container que agrupa todas as telas do Stack
    <Stack.Navigator>

      {/* Define a tela "Home" como uma rota */}
      {/* name = nome da rota | component = componente que será renderizado */}
      <Stack.Screen name="Home" component={Home} />
        
      {/* Define a tela "Detalhes" */}
      <Stack.Screen name="Detalhes" component={Detalhes} />
    </Stack.Navigator>
  )

}








