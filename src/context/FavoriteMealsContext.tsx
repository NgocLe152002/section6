import React, { createContext, useState, ReactNode, useContext } from 'react';
import { Meal } from '../screens/MealDetailScreen';

type FavoritesContextType = {
  favoriteMeals: Meal[];
  addFavorite: (meal: Meal) => void;
  removeFavorite: (mealId: string) => void;
};

const FavoritesContext = createContext<FavoritesContextType | undefined>(undefined);

export const useFavorites = () => {
  const context = useContext(FavoritesContext);
  if (!context) {
    throw new Error('useFavorites must be used within a FavoritesProvider');
  }
  return context;
};

export const FavoritesProvider = ({ children }: { children: ReactNode }) => {
  const [favoriteMeals, setFavoriteMeals] = useState<Meal[]>([]);

  const addFavorite = (meal: Meal) => {
    setFavoriteMeals((currentFavorites) => {
      if (currentFavorites.some((favMeal) => favMeal.id === meal.id)) {
        return currentFavorites; // Nếu món ăn đã có trong danh sách yêu thích, không thêm lại
      }
      return [...currentFavorites, meal];
    });
  };

  const removeFavorite = (mealId: string) => {
    setFavoriteMeals((currentFavorites) => currentFavorites.filter((meal) => meal.id !== mealId));
  };

  return (
    <FavoritesContext.Provider value={{ favoriteMeals, addFavorite, removeFavorite }}>
      {children}
    </FavoritesContext.Provider>
  );
};
