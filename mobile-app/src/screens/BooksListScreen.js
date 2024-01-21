
import React, { useEffect, useCallback,useState, useReducer } from 'react';
import { View, Text, Button, TouchableOpacity } from 'react-native';
import { apiService } from '../services/apiService.js';
import { useFocusEffect } from '@react-navigation/native';

import { commonStyles } from '../styles/styles.js';

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
        console.error('Error while trying to get books', error);
      }
    };
    useFocusEffect(
      useCallback(() => {
        // Charger les livres initiaux
        fetchBooks();
      }, [])
    );

  return (
    <View style={commonStyles.containerButtons}> 
      {books.length > 0 ? (
      books.map((book) => {
        return (
        <View key={book.id} style={commonStyles.containerButton}> 
          <Button key={book.id} title={book.title} onPress={() => navigation.navigate('Book-Details',{book})}/>
        </View>

        )})
    ) : (
      <Text>Waiting for books to be loaded</Text>
    )}
    </View>
  );
};

export default BooksListScreen;
