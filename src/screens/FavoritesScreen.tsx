import React from 'react';
import { View, Text, FlatList, StyleSheet, Image, TouchableOpacity, Alert } from 'react-native';
import { useFavorites } from '../context/FavoriteMealsContext'; // Nhập context
import { Meal } from './MealDetailScreen'; // Đảm bảo import đúng kiểu Meal
import Icon from 'react-native-vector-icons/Ionicons'; // Import icon library
import { useNavigation, NavigationProp } from '@react-navigation/native'; // Nhập NavigationProp

type RootStackParamList = {
  MealDetail: { mealId: string };
};

const FavoritesScreen = () => {
  const { favoriteMeals, removeFavorite } = useFavorites();
  const navigation = useNavigation<NavigationProp<RootStackParamList>>(); // Khai báo navigation với kiểu

  if (favoriteMeals.length === 0) {
    return (
      <View style={styles.screen}>
        <Text>Không có món ăn yêu thích nào.</Text>
      </View>
    );
  }

  const handleRemoveFavorite = (mealId: string) => {
    Alert.alert(
      "Xóa món ăn yêu thích",
      "Bạn có chắc chắn muốn xóa món ăn này khỏi danh sách yêu thích?",
      [
        { text: "Hủy", style: "cancel" },
        {
          text: "Xóa",
          style: "destructive",
          onPress: () => removeFavorite(mealId),
        },
      ]
    );
  };

  const handleMealPress = (mealId: string) => {
    navigation.navigate('MealDetail', { mealId });
  };

  const renderMealItem = ({ item }: { item: Meal }) => (
    <TouchableOpacity
      style={styles.mealItem}
      onPress={() => handleMealPress(item.id)} // Điều hướng tới MealDetailScreen
    >
      <Image source={{ uri: item.imageUrl }} style={styles.mealImage} />
      <View style={styles.mealDetails}>
        <Text style={styles.mealName}>{item.name}</Text>
        <TouchableOpacity
          style={styles.removeButton}
          onPress={(e) => {
            e.stopPropagation(); // Ngăn chặn sự kiện bấm từ bỏ kích hoạt sự kiện bấm vào phần tử
            handleRemoveFavorite(item.id);
          }}
        >
          <Icon name="trash-outline" size={24} color="red" />
        </TouchableOpacity>
      </View>
    </TouchableOpacity>
  );

  return (
    <FlatList
      data={favoriteMeals}
      renderItem={renderMealItem}
      keyExtractor={(item) => item.id}
    />
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  mealItem: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  mealImage: {
    width: 100,
    height: 100,
    marginRight: 10,
    borderRadius: 8,
  },
  mealDetails: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  mealName: {
    fontSize: 18,
    fontWeight: 'bold',
    flex: 1,
  },
  removeButton: {
    padding: 10,
  },
});

export default FavoritesScreen;
