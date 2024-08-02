// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './redux/store';
import Login from './components/Login';
import HelloWorld from './components/HelloWorld';

const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/hello" element={<HelloWorld />} />
          <Route path="/" element={<Login />} />
        </Routes>
      </Router>
    </Provider>
  );
};

export default App;
