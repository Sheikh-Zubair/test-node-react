  //imports
import axios from 'axios';

  //constants exports
  export const FETCH_USER = 'fetch_user';
  export const FETCH_AUTHORS = 'fetch_authors';


  //action creator exports
  export function addUser(user){

    return async dispatch => {
      const response = await axios.post('/api/signup', user);
      console.log (response);
      dispatch({ type: '', payload: '' });
    }

  }
  export function login(user) {
    return async dispatch => {
      const current_user = await axios.post('/api/login', user);
      dispatch({ type: FETCH_USER, payload: current_user.data });
    }
  }
  export function logoutUser() {
    return {
      type: '',
      payload: ''
    }
    
  }

  export function fetchAuthors() {
    return async dispatch => {
      const authors = await axios.get('/api/users');
      console.log(authors);
      dispatch({type: FETCH_AUTHORS, payload: authors.data});
    }
  }
  export function fetchUser() {
    return async dispatch => {
      const user = await axios.get('/api/current_user');
      dispatch({type: FETCH_USER, payload: user.data});
    }
  }
