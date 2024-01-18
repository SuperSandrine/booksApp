// Exemple d'utilisation dans un composant React
//Affiche la liste des livres obtenus à partir de l'API REST.
//Utilise fetch ou une bibliothèque appropriée pour effectuer les appels API.

import React, { useEffect, useCallback,useState, useReducer } from 'react';
import { View, Text, Button } from 'react-native';
import { apiService } from '../services/apiService.js';
import { useFocusEffect } from '@react-navigation/native';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const BooksListScreen = ({navigation}) => {
  const [books, setBooks] = useState([]);
  const [, forceUpdate] = useReducer((x) => x + 1, 0); // Ajoutez cette ligne

  
    const fetchBooks = async () => {
      try {
        // Utilisation de l'apiService pour effectuer l'appel API
        const data = await apiService('books');
        //console.log("Data reçue de l'API :", data);
        
        setBooks(data); // Met à jour l'état avec les données obtenues de l'API
        //forceUpdate()
      } catch (error) {
        console.error('Erreur lors de la récupération des livres:', error);
      }
    };
    useFocusEffect(
      useCallback(() => {
        // Charger les livres initiaux
        fetchBooks();
      }, [])
    );

  return (
    <View>
      <Text>Liste des livres :</Text>
      {books.length > 0 ? (
      books.map((book) => {
        return (<Button key={book.id} title={book.title} onPress={() => navigation.navigate('Book-Details',{book})}
        />)})
    ) : (
      <Text>Aucun livre reçu</Text>
    )}
    </View>
  );
};

export default BooksListScreen;
