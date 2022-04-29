import React, { FC, useState } from 'react';
import { ITodo, TodoContextType } from '../types/types';

export const TodoContext = React.createContext<TodoContextType | null>(null);

export const TodoProvider: FC<React.ReactNode> = () => {
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
  return null;
};
