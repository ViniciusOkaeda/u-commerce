import * as React from 'react';
import { StatusBar } from 'react-native';
import HomeScreen from './src/Screens/Home/home';
import ProfileScreen from './src/Screens/Profile/profile';
import CategoryScreen from './src/Screens/Category/category';
import FavoriteScreen from './src/Screens/Favorite/favorite';
import ProductScreen from './src/Screens/Product/product';
import ProductsByCategory from './src/Screens/Category/Products/products';
import ARSceneEcommerce from './src/Screens/ARScene/ars';
import Icon from 'react-native-vector-icons/AntDesign';


import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator();
const HomeStack = createNativeStackNavigator();
const CategoryStack = createNativeStackNavigator();
const FavoriteStack = createNativeStackNavigator();
const ProfileStack = createNativeStackNavigator();

const stackScreenOptions = {
  headerStyle: { backgroundColor: '#628DB4' },
  headerTintColor: '#fff',
  headerTitleAlign: 'center',
};

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar barStyle="light-content" backgroundColor="#007bff" />
      <Tab.Navigator
        screenOptions={{ 
          headerShown: false, 
          tabBarActiveTintColor: '#628DB4', 
          tabBarStyle: { backgroundColor: '#fff' } // Optional: custom tabBarStyle
        }}
      >
        {/* Home Tab */}
        <Tab.Screen
          name="Home"
          options={{
            tabBarLabel: 'Home',
            tabBarIcon: ({ color, size }) => (
              <Icon name="dingding" color={color} size={size} />            ), // Nome da aba sem ícone
          }}
        >
          {() => (
            <HomeStack.Navigator screenOptions={stackScreenOptions}>
              <HomeStack.Screen name="Home" component={HomeScreen} />
              <HomeStack.Screen name="Detalhes do Produto" 
              component={ProductScreen}  />
              <HomeStack.Screen name="Experimente seu Produto" component={ARSceneEcommerce} />
            </HomeStack.Navigator>
          )}
        </Tab.Screen>

        {/* Category Tab */}
        <Tab.Screen
          name="Category"
          options={{
            tabBarLabel: 'Categorias', // Nome da aba 
            tabBarIcon: ({ color, size }) => (
              <Icon name="appstore1" color={color} size={size} />            ), 
          }}
        >
          {() => (
            <CategoryStack.Navigator screenOptions={stackScreenOptions}>
              <CategoryStack.Screen name="Categoria de Produtos" component={CategoryScreen} />
              <CategoryStack.Screen
                name="Produtos da Categoria"
                component={ProductsByCategory}
                options={{ headerBackTitleVisible: false }} // Hide back button text
              />
              <CategoryStack.Screen 
              name="Detalhes do Produto" 
              component={ProductScreen} 
              />
              <CategoryStack.Screen name="Experimente seu Produto" component={ARSceneEcommerce} 
              />
            </CategoryStack.Navigator>
          )}
        </Tab.Screen>

        {/* Favorite Tab */}
        <Tab.Screen
          name="Favorite"
          options={{
            tabBarLabel: 'Favoritos', // Nome da aba
            tabBarIcon: ({ color, size }) => (
              <Icon name="heart" color={color} size={size} />            ), 
          }}
        >
          {() => (
            <FavoriteStack.Navigator screenOptions={stackScreenOptions}>
              <FavoriteStack.Screen name="Meus Favoritos" component={FavoriteScreen} />
            </FavoriteStack.Navigator>
          )}
        </Tab.Screen>

      </Tab.Navigator>
    </NavigationContainer>
  );
}