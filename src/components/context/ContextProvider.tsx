import {View, Text} from 'react-native';
import React, {
  PropsWithChildren,
  createContext,
  useContext,
  useState,
} from 'react';

const Context = createContext({});
const ContextProvider = ({children}: PropsWithChildren) => {
  const [listToDos, setListToDos] = useState([
    {id: 1, title: 'ซื้อของ'},
    {id: 2, title: 'อ่านหนังสือ'},
  ]);
  const values: any = {listToDos, setListToDos};
  return <Context.Provider value={{...values}}>{children}</Context.Provider>;
};

export default ContextProvider;

export const useContexts = () => useContext(Context);
