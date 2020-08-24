import React from 'react';
import { GlobalStorage } from './context/GlobalStorage';
import { BrowserRouter } from 'react-router-dom';
import Routes from './routes/';

const App = () => {
  return (
    <GlobalStorage>
      <BrowserRouter>
        <Routes />
      </BrowserRouter>
    </GlobalStorage>
  );
};

export default App;
