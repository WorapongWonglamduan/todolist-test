import React, {useState} from 'react';
import {View, StyleSheet} from 'react-native';
import {TextInput, Button} from 'react-native-paper';
import {useContexts} from '../../components/context/ContextProvider';

const AddTodoScreen = ({navigation}: any) => {
  const {listToDos, setListToDos}: any = useContexts();
  const [todoText, setTodoText] = useState('');

  const handleAddTodo = () => {
    if (todoText.trim()) {
      addTodo(todoText);
      navigation.goBack();
    }
  };
  const addTodo = (newTodo: string) => {
    setListToDos([...listToDos, {id: listToDos.length + 1, title: newTodo}]);
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
