import React, { useState, useEffect, useReducer } from 'react';
import { View, Text, Button, Alert } from 'react-native';
import { apiService } from '../services/apiService.js';

const DeleteBookScreen = ({ route, navigation }) => {
  const { id, title } = route.params.book;
  const [, forceUpdate] = useReducer((x) => x + 1, 0); // Ajoutez cette ligne


  const handleDeleteBook = async () => {
    try {
      // Demander une confirmation avant la suppression
      Alert.alert(
        'Confirmation',
        `Voulez-vous vraiment supprimer le livre "${title}" ?`,
        [
          {
            text: 'Annuler',
            style: 'cancel',
          },
          {
            text: 'Supprimer',
            onPress: async () => {
              // Appel de l'API pour supprimer le livre
              await apiService(`books/${id}`, 'DELETE');
              Alert.alert('Succès', 'Livre supprimé avec succès');
              
              navigation.navigate('Books-List');
             // Revenir à la liste des livres
            },
          },
        ]
      );
    } catch (error) {
      console.error('Erreur lors de la suppression du livre :', error);
      Alert.alert('Erreur', 'Une erreur est survenue lors de la suppression du livre');
    }
  };

  return (
    <View>
      <Text>Êtes-vous sûr de vouloir supprimer le livre "{title}" ?</Text>
      <Button title="Supprimer" onPress={handleDeleteBook} />
    </View>
  );
};

export default DeleteBookScreen;
