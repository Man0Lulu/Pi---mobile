import React, { useContext } from 'react';
import { createDrawerNavigator, DrawerContentScrollView, DrawerItem } from '@react-navigation/drawer';
import { DrawerActions } from '@react-navigation/native';

import UserContext from '../contexts/UserContext';
import Home from '../screens/Home';

const Drawer = createDrawerNavigator();

const CustomDrawerContent = ({ navigation }) => {
    const { handleLogout } = useContext(UserContext);

    return (
        <DrawerContentScrollView>
            <DrawerItem label="Início" onPress={() => navigation.navigate('Home')} />
            <DrawerItem label="Sair" onPress={() => {
                handleLogout();
                navigation.dispatch(DrawerActions.closeDrawer());
            }}
            />
        </DrawerContentScrollView>
    );
};

const AppRoute = () => (
    <Drawer.Navigator initialRouteName="Home" drawerContent={props => <CustomDrawerContent {...props} />}>
        <Drawer.Screen name="Home" component={Home} options={{ drawerLabel: 'Início', headerTitle: '', }} />
    </Drawer.Navigator>
);

export default AppRoute;
