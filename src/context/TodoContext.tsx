import React from 'react';
import { TodoContextType } from '../types/types';

export const TodoContext = React.createContext<TodoContextType | null>(null);
