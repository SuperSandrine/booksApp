import { View, Text, Button } from 'react-native'
import React from 'react'
import { commonStyles } from '../styles/styles';

export function HomeScreen({navigation}) {
  return (
    <View style={commonStyles.containerButtons}>
      <View style={commonStyles.containerButton}>
        <Button
          title="Go to List"
          onPress={() => navigation.navigate('Books-List')}
        />
      </View>
      <View style={commonStyles.containerButton}>
        <Button
          title="Add a new book"
          onPress={() => navigation.navigate('Add-Book')}
        />
      </View>
      
    </View>
  );
}


