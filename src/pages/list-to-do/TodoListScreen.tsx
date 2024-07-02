import React, {useState} from 'react';
import {View, FlatList, StyleSheet} from 'react-native';
import {List, IconButton, /* Colors, */ FAB} from 'react-native-paper';

const TodoListScreen = ({navigation}: any) => {
  const [todos, setTodos] = useState([
    {id: 1, title: 'Buy groceries'},
    {id: 2, title: 'Read a book'},
  ]);

  const deleteTodo = (id: number) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  const addTodo = (newTodo: string) => {
    setTodos([...todos, {id: todos.length + 1, title: newTodo}]);
  };

  const updateTodo = (updatedTodo: any) => {
    setTodos(
      todos.map(todo => (todo.id === updatedTodo.id ? updatedTodo : todo)),
    );
  };

  const navigateToAddTodo = () => {
    navigation.navigate('AddTodo', {addTodo});
  };

  const navigateToEditTodo = (id: number, title: string) => {
    navigation.navigate('EditTodo', {id, title, updateTodo});
  };

  const renderItem = ({item}: any) => (
    <List.Item
      title={item.title}
      right={() => (
        <>
          <IconButton icon="pencil" onPress={() => deleteTodo(item.id)} />
          <IconButton
            icon="pencil"
            onPress={() => navigateToEditTodo(item.id, item.title)}
          />
        </>
      )}
    />
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={todos}
        renderItem={renderItem}
        keyExtractor={item => item.id.toString()}
        ListEmptyComponent={() => (
          <View style={styles.emptyContainer}>
            <List.Item title="No todos yet" />
          </View>
        )}
      />
      <FAB style={styles.fab} icon="plus" onPress={navigateToAddTodo} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f0f0',
    padding: 10,
  },
  emptyContainer: {
    alignItems: 'center',
    marginTop: 50,
  },
  fab: {
    position: 'absolute',
    margin: 16,
    right: 0,
    bottom: 0,
    backgroundColor: '#6200ee',
  },
});

export default TodoListScreen;
