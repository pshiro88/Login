// src/redux/actions.js
export const login = (username, password) => dispatch => {
    // Simulate an API call
    if (username === 'user' && password === 'password') {
      dispatch({ type: 'LOGIN_SUCCESS' });
    } else {
      dispatch({ type: 'LOGIN_FAILURE', payload: 'Invalid credentials' });
    }
  };
  