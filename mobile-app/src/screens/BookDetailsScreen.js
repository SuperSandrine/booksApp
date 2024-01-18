//Affiche les détails d'un livre sélectionné.
import React from 'react';
import { View, Text, Button } from 'react-native';

const BooksDetailsScreen = ({ route, navigation }) => {
  const { book } = route.params;
  console.log("BOOK DANS DETAIL", book);

  return (
    <View>
      <Text>Détails du livre :</Text>
      <Text>Titre : {book.title}</Text>
      <Text>Auteur : {book.author}</Text>
      <Text>Genre : {book.genre}</Text>
      <Text>Date de publication : {book.publishDate}</Text>
      <Button
        title="Edit book"
        onPress={() => navigation.navigate('Edit-Book',{book})}
      />
      <Button
        title="suppress the book"
        onPress={() => navigation.navigate('Delete-Book',{book})}
      />
    </View>
  );
};

export default BooksDetailsScreen;
