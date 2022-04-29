import React from 'react';
import { Todo } from '../types/Todo';

interface TodosContextProps {
  addTodo: (newTodo: Todo) => void;
  removeTodo: (todoId: number) => void;
  clearTodos: () => void;
  todos: Todo[];
}

export const TodoContext = React.createContext<TodosContextProps | undefined>(
  undefined,
);
