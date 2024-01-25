//Fournit une interface pour éditer un livre existant.
// EditBookScreen.js

import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, Button, Alert } from 'react-native';
import { apiService } from '../services/apiService.js';
import { addBookStyles, commonStyles } from '../styles/styles.js';

const EditBookScreen = ({ route, navigation }) => {
  console.log("Params", route.params);
  console.log("NAVI", navigation);

  const { id, author,genre, title, publishDate } = route.params.book;
  const [book, setBook] = useState({
    id: id,
    title: title,
    author: author,
    genre: genre,
    publishDate: publishDate,
  });

  useEffect(() => {
    // Charger les détails du livre depuis l'API
    const fetchBookDetails = async () => {
      try {
        const data = await apiService(`books/${id}`);
        setBook(data);
      } catch (error) {
        console.error('Erreur lors du chargement des détails du livre :', error);
      }
    };

    fetchBookDetails();
  }, []);

  const handleUpdateBook = async () => {
    try {
      // Appel de l'API pour mettre à jour les détails du livre
      await apiService(`books/${id}`, 'PUT', book);
      Alert.alert('Succès', 'Livre mis à jour avec succès');
      setTimeout(()=>{
      navigation.navigate('Book-Details', {book});
      },1000);
       // Revenir à l'écran précédent
    } catch (error) {
      console.error('Erreur lors de la mise à jour du livre :', error);
      Alert.alert('Erreur', 'Une erreur est survenue lors de la mise à jour du livre');
    }
  };

  return (
    <View style={commonStyles.container}>
      <TextInput style={addBookStyles.input}
        placeholder="Title"
        value={book.title}
        onChangeText={(text) => setBook({ ...book, title: text })}
      />
      <TextInput style={addBookStyles.input}
        placeholder="Author"
        value={book.author}
        onChangeText={(text) => setBook({ ...book, author: text })}
      />
      <TextInput style={addBookStyles.input}
        placeholder="Genre"
        value={book.genre}
        onChangeText={(text) => setBook({ ...book, genre: text })}
      />
      <TextInput style={addBookStyles.input}
        placeholder="Publish Date"
        value={book.publishDate}
        onChangeText={(text) => setBook({ ...book, publishDate: text })}
      />
      <Button title="Update Book" onPress={handleUpdateBook} />
    </View>
  );
};

export default EditBookScreen;
