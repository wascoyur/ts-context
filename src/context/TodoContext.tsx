import React, {
  FC,
  PropsWithChildren,
  ReactElement,
  useState,
  ValidationMap,
  WeakValidationMap,
} from 'react';
import { ITodo, TodoContextType } from '../types/types';

export const TodoContext = React.createContext<TodoContextType | null>(null);

export const TodoProvider: FC = ({ children }: any | unknown | null) => {
  const [todos, setTodos] = useState<ITodo[]>([
    {
      id: 1,
      title: 'post 1',
      description: 'this is a description',
      status: false,
    },
    {
      id: 2,
      title: 'post 2',
      description: 'this is a description',
      status: true,
    },
  ]);
  const saveTodo = (todo: ITodo) => {
    const newTodo: ITodo = {
      id: Math.random(),
      title: todo.title,
      description: todo.description,
      status: todo.status,
    };
    setTodos([...todos, newTodo]);
  };
  const updateTodo = (id: number) => {
    todos.filter((todo: ITodo) => {
      if (todo.id === id) {
        todo.status = true;
        setTodos([...todos]);
      }
    });
  };
  return (
    <TodoContext.Provider value={{ todos, saveTodo, updateTodo }}>
      {children}
    </TodoContext.Provider>
  );
};
