import React from 'react';
import Routes from './routes';
import storage from './services/storage';

const App = () => {
  global.storage = storage;

  return (
    <Routes />
  );
};

export default App;
