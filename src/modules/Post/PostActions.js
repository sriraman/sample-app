export const ADD_POST = 'ADD_POST';
export const ADD_POSTS = 'ADD_POSTS';
export const DELETE_POST = 'DELETE_POST';

// Export Actions
export function addPost(post) {
  return {
    type: ADD_POST,
    post,
  };
}

export function addPostRequest(post) {
  return (dispatch) => {
    dispatch(addPost({
      id: new Date().getTime(),
      name: post.name,
      title: post.title,
      content: post.content,
    }))
  };
}

export function addPosts(posts) {
  return {
    type: ADD_POSTS,
    posts,
  };
}

export function fetchPosts() {
  return (dispatch) => {
    dispatch(addPosts([
      {
        id: 1,
        name: "Sriraman",
        title: "Hello World",
        content: "some content about the world",
      }
    ]))
  };
}

export function deletePost(id) {
  return {
    type: DELETE_POST,
    id,
  };
}

export function deletePostRequest(id) {
  return (dispatch) => {
    return dispatch(deletePost(id))
  };
}
