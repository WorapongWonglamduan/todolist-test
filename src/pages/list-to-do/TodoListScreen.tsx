import React from 'react';

import {View, FlatList, StyleSheet} from 'react-native';
import {List, IconButton, FAB} from 'react-native-paper';
import {useContexts} from '../../components/context/ContextProvider';

const TodoListScreen = ({navigation}: any) => {
  const {listToDos, setListToDos}: any = useContexts();

  const deleteTodo = (id: number) => {
    setListToDos(listToDos.filter((todo: any) => todo.id !== id));
  };

  const navigateToAddTodo = () => {
    navigation.navigate('AddTodo');
  };

  const navigateToEditTodo = (id: number, title: string) => {
    navigation.navigate('EditTodo', {id, title});
  };

  const renderItem = ({item}: any) => (
    <List.Item
      style={styles.itemList}
      title={item.title}
      right={() => (
        <>
          <IconButton
            icon="delete"
            size={20}
            onPress={() => deleteTodo(item.id)}
          />
          <IconButton
            icon="pencil"
            size={20}
            onPress={() => navigateToEditTodo(item.id, item.title)}
          />
        </>
      )}
    />
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={listToDos}
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
    alignSelf: 'center',
  },
  fab: {
    position: 'absolute',
    margin: 16,
    right: 0,
    bottom: 0,
    backgroundColor: '#add8e6',
  },
  itemList: {
    backgroundColor: '#add8e6',
    borderRadius: 20,
    marginBottom: 10,
  },
});

export default TodoListScreen;
