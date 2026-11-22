//Importa componentes básicos do React Native
//StyleSheet (estilos), Text (textos), View (container), Image (imagem)
import { StyleSheet, Text, View, Image } from 'react-native';

//Importa componentes do Drawer (menu lateral) do React Navigation
//DrawerContentScrollView: area rolável do menu
//DrawerItemList: Lista automática de itens do menu
import {
  DrawerContentScrollView,
  DrawerItemList,
} from '@react-navigation/drawer';

//Cria um componente personalizado para o menu LATERAL (Drawer)
export default function CustomDrawer(props) {
  return (
    //Container principal do Drawer com rolagem
    //{...props} repassa todas as propriedades recebidas
    <DrawerContentScrollView {...props}>
      {/* View usada como cabeçalho do menu */}
      <View style={{
        width: '100%', //Ocupa toda a largura
        height: 85, //altura da area
        alignItems: 'center', //centraliza os itens
        justifyContent: 'center', //centraliza os itens
        marginTop: 30, //espaço superior
      }}>

        {/* Imagem de Perfil */}
        <Image source={require('../assets/perfil.png')} //caminho da imagem local
        style={{width: 65, height: 65}} />

        {/* Texto de Boas-Vindas */}
        <Text style={{ color: '#000', fontSize: 17, marginTop: 5, marginBottom: 35}}>
        Bem-Vindo!
        </Text>

      </View>

      {/* Renderiza automaticamente os itens do menu (telas cadastradas) */}
      <DrawerItemList {...props} />
    </DrawerContentScrollView>
  );
}










