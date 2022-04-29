import React, { useCallback, useState } from 'react';
import { Todo } from '../types/Todo';
import { TodoContext } from './ContextCreator';

const ContextProvider: JSX.Element = () => {
  const [todos, setTodos] = useState<Todo[]>([]);

  const addTodo = useCallback(
    (newTodo: Todo) => setTodos([...todos, newTodo]),
    [todos],
  );
  const clearTodos = useCallback(() => setTodos([]), []);
  const removeTodo = useCallback(
    (todoId: number) => setTodos(todos.filter((t) => t.id !== todoId)),
    [todos],
  );
  return (
    <TodoContext.Provider
      value={{
        addTodo,
        removeTodo,
        clearTodos,
        todos,
      }}>
      ContextProvider
    </TodoContext.Provider>
  );
};

export default ContextProvider;
