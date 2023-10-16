import React, { useContext } from 'react';
import { createDrawerNavigator, DrawerContentScrollView, DrawerItem } from '@react-navigation/drawer';
import { DrawerActions } from '@react-navigation/native';
import UserContext from '../contexts/UserContext';
import Home from '../screens/Home';
import Perfil from '../screens/Perfil';
import { View,TouchableOpacity, Image } from 'react-native';
import MenuSVG from '../svg/MenuSVG';
import CriarHabito from '../screens/CriarHabito';

const Drawer = createDrawerNavigator();

const CustomDrawerContent = ({ navigation }) => {
  const { handleLogout } = useContext(UserContext);

  return (
    <DrawerContentScrollView style={{ backgroundColor: '#F2E6E6' }}>
      <DrawerItem label="Início" onPress={() => navigation.navigate('Home')} />
      <DrawerItem label="Perfil" onPress={() => navigation.navigate('Perfil')} />
      <DrawerItem
        label="Sair"
        onPress={() => {
          handleLogout();
          navigation.dispatch(DrawerActions.closeDrawer());
        }}
      />
    </DrawerContentScrollView>
  );
};

const CustomDrawerHeader = ({ navigation }) => {

  return (
    <View style={{ flexDirection: 'row', alignItems: 'center',justifyContent: 'space-between', paddingTop:50,paddingBottom:8, paddingLeft:15, backgroundColor: '#F2E6E6' }}>
      <TouchableOpacity onPress={() => navigation.dispatch(DrawerActions.toggleDrawer())}>
        <MenuSVG />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('Perfil')}>
      <Image source={require('../assets/icone-usuario.png')} style={{ width: 50, height: 50, borderRadius: 25, marginRight: 16, borderWidth:1.5, borderColor: 'rgba(181, 33, 120, 0.7)'}} />
      </TouchableOpacity>
    </View>
  );
};

const AppRoute = () => (
  <Drawer.Navigator
    initialRouteName="Home"
    drawerContent={props => <CustomDrawerContent {...props} />}

    screenOptions={{
      header: props => <CustomDrawerHeader {...props} />,
      headerStyle: {
        backgroundColor: '#F2E6E6',
      },
      headerTintColor: 'black',
    }}
  >
    <Drawer.Screen
      name="Home"
      component={Home}
      options={{
        drawerLabel: 'Início',
        headerTitle: ' ',
        headerTitleAlign: 'center',
      }}
    />
    <Drawer.Screen
      name="Perfil"
      component={Perfil}
      options={{
        drawerLabel: 'Perfil',
        headerTitle: ' ',
        headerTitleAlign: 'center',
      }}
    />
    <Drawer.Screen
      name="CriarHabito"
      component={CriarHabito}
      options={{
        drawerLabel: 'CriarHabito',
        headerTitle: ' ',
        headerTitleAlign: 'center',
      }}
    />
  </Drawer.Navigator>
);

export default AppRoute;