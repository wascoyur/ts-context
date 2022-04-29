import React, { FC, useContext, useState } from 'react';
import { TodoContext } from '../context/TodoContext';
import { ITodo, TodoContextType } from '../types/types';

const AddTodo: FC = () => {
  const { saveTodo } = useContext(TodoContext) as TodoContextType;
  const [formData, setFormData] = useState<ITodo | {}>();
  const handleForm = (e: React.FormEvent<HTMLInputElement>): void => {
    setFormData({ ...formData, [e.currentTarget.id]: e.currentTarget.value });
  };
  const handleSaveTodo = (e: React.FormEvent, formData: ITodo | any) => {
    e.preventDefault();
    saveTodo(formData);
  };
  return (
    <div>
      <h2>AddTodo</h2>
      <form className='Form' onSubmit={(e) => handleSaveTodo(e, formData)}>
        <div>
          <div>
            <label htmlFor='name'>Title</label>
            <input onChange={handleForm} type='text' id='title' />
          </div>
          <div>
            <label htmlFor='description'>Description</label>
            <input onChange={handleForm} type='text' id='description' />
          </div>
        </div>
        <button disabled={formData === undefined ? true : false}>
          Add Todo
        </button>
      </form>
    </div>
  );
};

export default AddTodo;
