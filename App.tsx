// App.js
import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import TodoListScreen from './src/pages/list-to-do/TodoListScreen';
import AddTodoScreen from './src/pages/Add/AddTodoScreen';
import EditTodoScreen from './src/pages/Edit/EditTodoScreen';
import ContextProvider from './src/components/context/ContextProvider';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <ContextProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="TodoList">
          <Stack.Screen name="TodoList" component={TodoListScreen} />
          <Stack.Screen name="AddTodo" component={AddTodoScreen} />
          <Stack.Screen name="EditTodo" component={EditTodoScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </ContextProvider>
  );
}

export default App;
