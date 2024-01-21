//Définit la navigation entre les écrans.
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { HomeScreen } from '../screens/HomeScreen';
import BooksListScreen from '../screens/BooksListScreen';
import BooksDetailsScreen from '../screens/BookDetailsScreen';
import AddBookScreen from '../screens/AddBookScreen';
import EditBookScreen from '../screens/EditBookScreen';
import DeleteBookScreen from '../screens/DeleteBookScreen';
import { Button } from 'react-native';

export const AppNavigator = ({navigation}) =>{

  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator 
        screenOptions={{
          headerStyle: {backgroundColor:'#FF3EC7'},
          headerTintColor: '#fff',
          headerTitleStyle: {fontWeight: 'bold'},
        }}
        initialRouteName="Home">
        <Stack.Screen 
          name="Home" 
          component={HomeScreen}
          options={{
            title: "Welcome on booksApp",
          }}
        />
        <Stack.Screen 
          name="Books-List" 
          component={BooksListScreen} 
          options={({navigation}) => 
            ({title: "Books list",
            headerRight: () => (
              <Button
                title="home"
                onPress={() => navigation.navigate('Home')}
              />
            )
          })}
        />
        <Stack.Screen name="Book-Details" component={BooksDetailsScreen} options={{title: "Book details"}}/>
        <Stack.Screen name="Add-Book" component={AddBookScreen} options={{
          title:"Add a new book to the list",
          }}/>
          <Stack.Screen name="Edit-Book" component={EditBookScreen} options={{
          title:"Edit a book",
          }}/>
          <Stack.Screen name="Delete-Book" component={DeleteBookScreen} options={{
          title:"Suppress a book",
          }}/>
      </Stack.Navigator> 
    </NavigationContainer>
  )
}

