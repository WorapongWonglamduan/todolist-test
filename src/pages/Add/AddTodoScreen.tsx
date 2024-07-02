import React, {useState} from 'react';
import {View, StyleSheet} from 'react-native';
import {TextInput, Button} from 'react-native-paper';

const AddTodoScreen = ({navigation, route}: any) => {
  const [todoText, setTodoText] = useState('');

  const handleAddTodo = () => {
    if (todoText.trim()) {
      route.params.addTodo(todoText); // Call addTodo function passed via navigation params
      navigation.goBack(); // Navigate back to TodoListScreen
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        label="Add Todo"
        value={todoText}
        onChangeText={text => setTodoText(text)}
        style={styles.input}
      />
      <Button mode="contained" onPress={handleAddTodo}>
        Add Todo
      </Button>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20,
  },
  input: {
    marginBottom: 20,
  },
});

export default AddTodoScreen;
