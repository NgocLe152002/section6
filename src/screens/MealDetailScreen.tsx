import React, { useEffect, useState } from 'react';
import { View, Text, Image, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { MEALS } from '../data/meals';
import { useRoute, RouteProp, useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import Icon from 'react-native-vector-icons/Ionicons';
import { useFavorites } from '../context/FavoriteMealsContext';

// Define the type for route params
type RootStackParamList = {
  MealDetail: { mealId: string };
};

type MealDetailScreenRouteProp = RouteProp<RootStackParamList, 'MealDetail'>;
type MealDetailScreenNavigationProp = NativeStackNavigationProp<RootStackParamList, 'MealDetail'>;

// Define the type for a meal
export type Meal = {
  id: string;
  categoryId: string;
  name: string;
  imageUrl: string;
  duration: number;
  complexity: string;
  affordability: string;
  ingredients: string[];
  steps: string[];
};

const MealDetailScreen = () => {
  const route = useRoute<MealDetailScreenRouteProp>();
  const navigation = useNavigation<MealDetailScreenNavigationProp>();
  const mealId = route.params?.mealId; 
  const { favoriteMeals, addFavorite, removeFavorite } = useFavorites();

  const [isFavorite, setIsFavorite] = useState(false);

  useEffect(() => {
    if (mealId) {
      const meal = MEALS.find(meal => meal.id === mealId) as Meal | undefined;
      if (meal) {
        setIsFavorite(favoriteMeals.some(favMeal => favMeal.id === meal.id));
        navigation.setOptions({
          title: meal.name,
          headerRight: () => (
            <TouchableOpacity onPress={() => {
              if (isFavorite) {
                removeFavorite(meal.id);
              } else {
                addFavorite(meal);
              }
              setIsFavorite(!isFavorite);
            }}>
              <Icon
                name={isFavorite ? "star" : "star-outline"}
                size={24}
                color="gold"
                style={{ marginRight: 10 }}
              />
            </TouchableOpacity>
          ),
        });
      }
    }
  }, [mealId, navigation, favoriteMeals, isFavorite, addFavorite, removeFavorite]);

  if (!mealId) {
    return <Text>Không có dữ liệu món ăn.</Text>;
  }

  const selectedMeal = MEALS.find(meal => meal.id === mealId) as Meal | undefined;

  if (!selectedMeal) {
    return <Text>Không tìm thấy món ăn.</Text>;
  }

  return (
    <ScrollView>
      <Image source={{ uri: selectedMeal.imageUrl }} style={styles.image} />
      <Text style={styles.title}>{selectedMeal.name}</Text>
      <View style={styles.details}>
        <Text>Thời gian nấu: {selectedMeal.duration} phút</Text>
        <Text>Độ phức tạp: {selectedMeal.complexity}</Text>
        <Text>Chi phí: {selectedMeal.affordability}</Text>
      </View>
      <Text style={styles.subtitle}>Nguyên liệu:</Text>
      {selectedMeal.ingredients.map(ingredient => (
        <Text key={ingredient} style={styles.listItem}>{ingredient}</Text>
      ))}
      <Text style={styles.subtitle}>Các bước thực hiện:</Text>
      {selectedMeal.steps.map(step => (
        <Text key={step} style={styles.listItem}>{step}</Text>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  image: {
    width: '100%',
    height: 300,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    margin: 8,
    textAlign: 'center',
  },
  details: {
    flexDirection: 'column',
    justifyContent: 'space-around',
    alignItems: 'center',
    padding: 8,
  },
  subtitle: {
    fontSize: 18,
    fontWeight: 'bold',
    margin: 8,
  },
  listItem: {
    marginHorizontal: 12,
    marginVertical: 4,
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 4,
  },
});

export default MealDetailScreen;
