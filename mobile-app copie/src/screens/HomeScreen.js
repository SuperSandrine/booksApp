import { View, Text, Button } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


export function HomeScreen({navigation}) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home Screen</Text>
      <Button
        title="Go to List"
        onPress={() => navigation.navigate('Books-List')}
      />
      <Button
        title="Add a new book"
        onPress={() => navigation.navigate('Add-Book')}
      />
      
    </View>
  );
}

