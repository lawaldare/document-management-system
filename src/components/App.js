import React from 'react';
import NavBar from './NavBar/NavBar';

function App({ children }) {
  return (
    <div className="App">
      <NavBar />
      {children}
    </div>
  );
}

export default App;
