import React from 'react';
import { View, Text, Image, FlatList, TouchableOpacity, StyleSheet } from 'react-native';
import { CATEGORIES } from '../data/meals';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

type RootStackParamList = {
  MealsOverview: { categoryId: string };
};

type CategoriesScreenNavigationProp = NativeStackNavigationProp<RootStackParamList, 'MealsOverview'>;

const CategoriesScreen = () => {
  const navigation = useNavigation<CategoriesScreenNavigationProp>();

  const renderCategoryItem = ({ item }: { item: (typeof CATEGORIES)[0] }) => (
    <TouchableOpacity
      style={styles.gridItem}
      onPress={() => navigation.navigate('MealsOverview', { categoryId: item.id })}
    >
      <View style={styles.categoryContainer}>
        <Image source={{ uri: item.imageUrl }} style={styles.categoryImage} />
        <Text style={styles.categoryTitle}>{item.name}</Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <FlatList
      data={CATEGORIES}
      renderItem={renderCategoryItem}
      keyExtractor={(item) => item.id}
      numColumns={2}  // Hiển thị 2 cột
    />
  );
};

const styles = StyleSheet.create({
  gridItem: {
    flex: 1,
    margin: 10,
    height: 150,
  },
  categoryContainer: {
    flex: 1,
    borderRadius: 8,
    overflow: 'hidden',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#f5f5f5',
    elevation: 5, 
    shadowColor: 'black',
    shadowOpacity: 0.25,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 8,
  },
  categoryImage: {
    width: '100%',
    height: '80%',
    resizeMode: 'cover',
  },
  categoryTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 8,
  },
});

export default CategoriesScreen;
