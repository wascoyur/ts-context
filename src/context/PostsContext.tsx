import React from 'react';
import { postsContextDefaultValue } from './postsContextDefaultValue';
import { PostsContextData } from './PostsContextData';

export const PostsContext = React.createContext<PostsContextData>(
  postsContextDefaultValue,
);
