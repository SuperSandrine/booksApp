//Fournit une interface pour ajouter un nouveau livre.
import React, { useState } from 'react';
import { View, Text, TextInput, Button, Alert } from 'react-native';
import { apiService } from '../services/apiService';

const AddBooksScreen = ({ navigation }) => {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [genre, setGenre] = useState('');
  const [publishDate, setPublishDate] = useState('');

  const handleAddBook = async () => {
    try {
      const newBook = {
        title,
        author,
        genre,
        publishDate,
      };
      console.log("voivi un nouveau livre", newBook);

      // Utilisation de l'apiService pour effectuer l'appel API pour ajouter un nouveau livre
      await apiService('books', 'POST', newBook);

      Alert.alert('Succès', 'Le livre a été ajouté avec succès.');

      setTitle('');
      setAuthor('');
      setGenre('');
      setPublishDate('');

      // Navigation vers l'écran de la liste des livres après l'ajout
      navigation.navigate('Books-List');
    } catch (error) {
      console.error('Erreur lors de l\'ajout du livre :', error);
      Alert.alert('Erreur', 'Une erreur s\'est produite lors de l\'ajout du livre. Veuillez réessayer.');

    }
  };

  return (
    <View>
      <Text>Ajouter un nouveau livre :</Text>
      <TextInput
        placeholder="Titre"
        value={title}
        onChangeText={(text) => setTitle(text)}
      />
      <TextInput
        placeholder="Auteur"
        value={author}
        onChangeText={(text) => setAuthor(text)}
      />
      <TextInput
        placeholder="Genre"
        value={genre}
        onChangeText={(text) => setGenre(text)}
      />
      <TextInput
        placeholder="Date de publication"
        value={publishDate}
        onChangeText={(text) => setPublishDate(text)}
      />
      <Button title="Ajouter le livre" onPress={handleAddBook} />
    </View>
  );
};

export default AddBooksScreen;
