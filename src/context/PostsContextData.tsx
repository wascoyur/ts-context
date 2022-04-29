import { Post } from './interfaces';

export interface PostsContextData {
  posts: Post[];
  isLoading: boolean;
  fetchPosts: Post[];
  removePost: Post;
}
