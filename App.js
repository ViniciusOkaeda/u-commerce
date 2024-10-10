import * as React from 'react';
import { StatusBar } from 'react-native';
import HomeScreen from './src/Screens/Home/home';
import ProfileScreen from './src/Screens/Profile/profile';
import CategoryScreen from './src/Screens/Category/category';
import FavoriteScreen from './src/Screens/Favorite/favorite';
import ProductScreen from './src/Screens/Product/product';
import ProductsByCategory from './src/Screens/Category/Products/products';

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
            tabBarLabel: 'Home', // Nome da aba sem ícone
          }}
        >
          {() => (
            <HomeStack.Navigator screenOptions={stackScreenOptions}>
              <HomeStack.Screen name="Home" component={HomeScreen} />
            </HomeStack.Navigator>
          )}
        </Tab.Screen>

        {/* Category Tab */}
        <Tab.Screen
          name="Category"
          options={{
            tabBarLabel: 'Category', // Nome da aba sem ícone
          }}
        >
          {() => (
            <CategoryStack.Navigator screenOptions={stackScreenOptions}>
              <CategoryStack.Screen name="Category" component={CategoryScreen} />
              <CategoryStack.Screen
                name="ProductsByCategory"
                component={ProductsByCategory}
                options={{ headerBackTitleVisible: false }} // Hide back button text
              />
              <CategoryStack.Screen name="Product" component={ProductScreen} />
            </CategoryStack.Navigator>
          )}
        </Tab.Screen>

        {/* Favorite Tab */}
        <Tab.Screen
          name="Favorite"
          options={{
            tabBarLabel: 'Favorite', // Nome da aba sem ícone
          }}
        >
          {() => (
            <FavoriteStack.Navigator screenOptions={stackScreenOptions}>
              <FavoriteStack.Screen name="Favorite" component={FavoriteScreen} />
            </FavoriteStack.Navigator>
          )}
        </Tab.Screen>

        {/* Profile Tab */}
        <Tab.Screen
          name="Profile"
          options={{
            tabBarLabel: 'Profile', // Nome da aba sem ícone
          }}
        >
          {() => (
            <ProfileStack.Navigator screenOptions={stackScreenOptions}>
              <ProfileStack.Screen name="Profile" component={ProfileScreen} />
            </ProfileStack.Navigator>
          )}
        </Tab.Screen>
      </Tab.Navigator>
    </NavigationContainer>
  );
}