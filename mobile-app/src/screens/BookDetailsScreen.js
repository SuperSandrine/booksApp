//Affiche les détails d'un livre sélectionné.
import React from 'react';
import { View, Text, Button } from 'react-native';
import { addBookStyles, booksDetailStyles, commonStyles } from '../styles/styles';

const BooksDetailsScreen = ({ route, navigation }) => {
  const { book } = route.params;
  console.log("BOOK DANS DETAIL", book);

  return (
    <View style={commonStyles.container}>
      <View style={booksDetailStyles.container}>
        <Text style={commonStyles.titleInfo}>Title :    <Text style={commonStyles.titleh2}>{book.title}</Text></Text>
        <Text style={commonStyles.titleInfo}>Author : <Text style={commonStyles.titleh2}>{book.author}</Text></Text>
        <Text style={commonStyles.titleInfo}>Genre : <Text style={commonStyles.titleh2}>{book.genre}</Text></Text>
        <Text style={commonStyles.titleInfo}>Publication Date :<Text style={commonStyles.titleh2}> {book.publishDate}</Text></Text>
      </View>
      <View style={commonStyles.containerButtons}>
        <View style={commonStyles.containerButton}>
          <Button
            title="Edit book"
            onPress={() => navigation.navigate('Edit-Book',{book})}
          />
        </View>
        <View style={commonStyles.containerButton}>
          <Button
            title="suppress the book"
            onPress={() => navigation.navigate('Delete-Book',{book})}
          />
        </View>
      </View>
    </View>
  );
};

export default BooksDetailsScreen;
