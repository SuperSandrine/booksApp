// styles.js

import { StyleSheet } from 'react-native';

export const commonStyles = StyleSheet.create({
  container: {
    flex: 3,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFA124', // primary color
  },
  text: {
    color: '#310066',
    fontSize: 18,
  },
  containerButtons:{
    flex:1,
    backgroundColor: '#FFA124', // primary color
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    //marginBottom:10,
  },
  containerButton:{
    marginBottom:15,
    minWidth:'95%',
  },
  titleh2:{
    color: '#00155c',
    fontSize: 30,
    textTransform: 'capitalize',
  },
  titleInfo:{
    fontSize:20,
  },

});

export const booksDetailStyles = StyleSheet.create({
  // BooksListScreen
    container: {
      flex: 2,
      justifyContent: 'flex-end',
      alignItems: 'flex-start',
      backgroundColor: '#FFA124', // primary color
    },
});

export const addBookStyles = StyleSheet.create({
  // Styles spécifiques au composant AddBookScreen
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 15,
    paddingHorizontal: 10,
    backgroundColor: '#ffffff',
  },
  addButton: {
    backgroundColor: '#e74c3c', // Utilisation de la couleur accent
    padding: 15,
    borderRadius: 8,
    alignItems: 'center',
  },
  addButtonText: {
    color: '#ffffff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

// Ajoutez des styles similaires pour les autres écrans selon vos besoins
