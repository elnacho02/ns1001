import {get} from "../utils/httpClient";

export function addFavorites(post) {
  return {
    type: 'ADD_FAVORITES',
    post
  }
};
export function removeFavorites(post) {
    return {
      type: 'REMOVE_FAVORITES',
      post
  };
};
export function addResult(post) {
  return {
    type: 'ADD_RESULT',
    post
  }
}

export function removeResult() {
  return {
    type: 'REMOVE_RESULT',
  }
}
export function getPost() {
    return {
      type: 'GET_POST',
    }
  }

/* export function receivePost(post) {
  return {
    type: 'RECEIVE_POST',
    post
  }
} */

export function fetchPost(valor) {
  return function (dispatch) {
    dispatch(getPost());
    (get(valor).then((data)=>{
      dispatch(addResult(data.results));
      })
     )
    }
  
  }
    
    
    /* axios.get(`https://jsonplaceholder.typicode.com/todos/${valor}`)
      .then(r => r.data)
      .then(d => dispatch(receivePost(d)))
      .catch(e => console.log(e));*/
  