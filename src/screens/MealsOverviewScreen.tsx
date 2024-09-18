import React, { useEffect } from 'react';
import { View, Text, FlatList, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { MEALS, CATEGORIES } from '../data/meals';
import { useRoute, useNavigation, RouteProp } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import Icon from 'react-native-vector-icons/Ionicons'; // Import icon library

type RootStackParamList = {
  MealsOverview: { categoryId: string };
  MealDetail: { mealId: string };
};

type MealsOverviewScreenRouteProp = RouteProp<RootStackParamList, 'MealsOverview'>;
type MealsOverviewScreenNavigationProp = NativeStackNavigationProp<RootStackParamList, 'MealsOverview'>;

type Meal = {
  id: string;
  categoryId: string;
  name: string;
  imageUrl: string;
};

const MealsOverviewScreen = () => {
  const route = useRoute<MealsOverviewScreenRouteProp>();
  const navigation = useNavigation<MealsOverviewScreenNavigationProp>();
  const { categoryId } = route.params || {};

  // Kiểm tra giá trị của categoryId
  console.log('Category ID:', categoryId);

  if (!categoryId) {
    return <Text>Không có ID danh mục để hiển thị.</Text>;
  }

  const displayedMeals = MEALS.filter(meal => meal.categoryId === categoryId);

  useEffect(() => {
    const categoryTitle = CATEGORIES.find(category => category.id === categoryId)?.name;
    console.log('Category Title:', categoryTitle); // Log category title để kiểm tra
    navigation.setOptions({
      title: categoryTitle,
      headerRight: () => (
        <TouchableOpacity onPress={() => console.log('Search pressed')}>
          <Icon name="search-outline" size={24} color="black" style={{ marginRight: 10 }} />
        </TouchableOpacity>
      ),
    });
  }, [categoryId, navigation]);

  const renderMealItem = ({ item }: { item: Meal }) => (
    <TouchableOpacity
      style={styles.mealItem}
      onPress={() => {
        console.log('Navigating to MealDetail with mealId:', item.id);
        navigation.navigate('MealDetail', { mealId: item.id });
      }}
    >
      <Image source={{ uri: item.imageUrl }} style={styles.mealImage} />
      <Text style={styles.mealName}>{item.name}</Text>
    </TouchableOpacity>
  );

  return (
    <FlatList
      data={displayedMeals}
      renderItem={renderMealItem}
      keyExtractor={(item) => item.id}
    />
  );
};

const styles = StyleSheet.create({
  mealItem: {
    margin: 16,
    borderRadius: 8,
    overflow: 'hidden',
    backgroundColor: 'white',
  },
  mealImage: {
    width: '100%',
    height: 200,
  },
  mealName: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    padding: 8,
  },
});

export default MealsOverviewScreen;
