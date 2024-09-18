import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { FavoritesProvider } from '../../src/context/FavoriteMealsContext';
import CategoriesScreen from '../../src/screens/CategoriesScreen';
import MealsOverviewScreen from '../../src/screens/MealsOverviewScreen';
import MealDetailScreen from '../../src/screens/MealDetailScreen';
import FavoritesScreen from '../../src/screens/FavoritesScreen';
import SettingsScreen from '../../src/screens/SettingsScreens';

type RootStackParamList = {
  Categories: undefined;
  MealsOverview: { categoryId: string };
  MealDetail: { mealId: string };
};

type TabParamList = {
  Meals: undefined;
  Favorites: undefined;
  Settings: undefined;
};

type DrawerParamList = {
  Main: undefined;
  Categories: undefined;
  MealsOverview: undefined;
  MealDetail: undefined;
  Favorites: undefined;
  Settings: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();
const Drawer = createDrawerNavigator<DrawerParamList>();
const Tab = createBottomTabNavigator<TabParamList>();

function MealsNavigator() {
  return (
    <Stack.Navigator initialRouteName="Categories">
      <Stack.Screen name="Categories" component={CategoriesScreen} />
      <Stack.Screen name="MealsOverview" component={MealsOverviewScreen} />
      <Stack.Screen name="MealDetail" component={MealDetailScreen} />
    </Stack.Navigator>
  );
}

function TabNavigator() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Meals" component={MealsNavigator} />
      <Tab.Screen name="Favorites" component={FavoritesScreen} />
      <Tab.Screen name="Settings" component={SettingsScreen} />
    </Tab.Navigator>
  );
}

export default function AppNavigator() {
  return (
    <FavoritesProvider>
      <Drawer.Navigator initialRouteName="Main">
        <Drawer.Screen name="Main" component={TabNavigator} />
        <Drawer.Screen name="Categories" component={CategoriesScreen} />
        <Drawer.Screen name="MealsOverview" component={MealsOverviewScreen} />
        <Drawer.Screen name="MealDetail" component={MealDetailScreen} />
        <Drawer.Screen name="Favorites" component={FavoritesScreen} />
        <Drawer.Screen name="Settings" component={SettingsScreen} />
      </Drawer.Navigator>
    </FavoritesProvider>
  );
}
