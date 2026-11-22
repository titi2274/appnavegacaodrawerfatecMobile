//Importa components básicos do React Native (que não estão sendo usados aqui, mas poderia ser)
import { StyleSheet, Text, View } from 'react-native';

//importa a função para criar o menu lateral (Drawer)
import { createDrawerNavigator } from  '@react-navigation/drawer';

//importa as rotas em formato Stack (navegação em pilha)
import StackRoutes from './stackRoutes';

//importa as telas individuais
import Sobre from '../pages/Sobre';
import Contato from '../pages/Contato';

//importa o componente personalizado do Drawer (menu lateral customizado)
import CustomDrawer from '../../components/CustomDrawer';

//Cria e exporta o componente principal de rotas
export default function Routes() {

  //cria o objeto Drawer para gerenciar o menu lateral
  const Drawer = createDrawerNavigator();

  return (
    //Container principal do Drawer  (menu lateral)
    <Drawer.Navigator
    //Define um Drawer personalizado (substitui o padrão)
    drawerContent={CustomDrawer}
    //Com o comando abaixo o menu sanduiche some e poderá ser aberto caso o usuário puxe com o dedo
    screenOptions={{
      //heardShown: false, //remove o header (barra superior) se ativado
      //Estilização do menu lateral
      drawerStyle: {
        //backgroundColor: '#121212' //cor de fundo do Drawer
      },
      //cor de fundo do item ativado (selecionado)
      drawerActiveBackgroundColor: '#00DAE4',
      //cor do texto /icone ativado
      drawerActiveTintColor: '#FFF',
      //Cor do fundo dos itens inativos
      drawerInactiveBackgroundColor: '#F1F1F1',
      //Cor do texto/icone inativo
      drawerInactiveTintColor: '#000',
    }}>

    {/* Tela principal que contém um Stack (Home + Detalhes) */}
    <Drawer.Screen name="HomeStack" component={StackRoutes} />

    {/* Tela Sobre */}
    <Drawer.Screen name="Sobre" component={Sobre} />

    {/* Tela Contato */}
    <Drawer.Screen name="Contato" component={Contato} />

    </Drawer.Navigator>
  );
}





