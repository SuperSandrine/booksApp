import { View, Text, Button, Image} from 'react-native'
import React from 'react'
import { commonStyles } from '../styles/styles';

export function HomeScreen({navigation}) {
  return (
    <View style={commonStyles.containerButtons}>
      <Image source={require('../../assets/imgbin_books.png')} style={{width: '100%', resizeMode: 'contain'}}/>
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


