import { ADD_POST, ADD_POSTS, DELETE_POST } from './PostActions';

const initialState = { data: [] };

const PostReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST :
      return {
        data: [action.post, ...state.data],
      };

    case ADD_POSTS :
      return {
        data: action.posts,
      };

    case DELETE_POST :
      console.log(state.data)
      console.log(action)
      return {
        data: state.data.filter(post => post.id !== action.id),
      };

    default:
      return state;
  }
};


export const getPosts = state => state.posts.data;

export const getPost = (state, id) => state.posts.data.filter(post => post.id === id)[0];

export default PostReducer;
