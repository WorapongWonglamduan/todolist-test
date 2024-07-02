import React, {useState} from 'react';
import {View, StyleSheet} from 'react-native';
import {TextInput, Button} from 'react-native-paper';

const EditTodoScreen = ({navigation, route}: any) => {
  const {id, title, updateTodo} = route.params;
  const [newTodoTitle, setNewTodoTitle] = useState(title);

  const handleUpdateTodo = () => {
    if (newTodoTitle.trim()) {
      updateTodo({id, title: newTodoTitle}); // Call updateTodo function passed via navigation params
      navigation.goBack(); // Navigate back to TodoListScreen
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        label="Edit Todo"
        value={newTodoTitle}
        onChangeText={text => setNewTodoTitle(text)}
        style={styles.input}
      />
      <Button mode="contained" onPress={handleUpdateTodo}>
        Update Todo
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

export default EditTodoScreen;
