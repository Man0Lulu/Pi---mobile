import React, { useContext } from 'react';
import { createDrawerNavigator, DrawerContentScrollView, DrawerItem } from '@react-navigation/drawer';
import { DrawerActions } from '@react-navigation/native';
import UserContext from '../contexts/UserContext';
import Home from '../screens/Home';
import Perfil from '../screens/Perfil';
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

const AppRoute = () => (
  <Drawer.Navigator
    initialRouteName="Home"
    drawerContent={props => <CustomDrawerContent {...props} />}

    screenOptions={{
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
