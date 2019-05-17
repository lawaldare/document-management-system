import React from 'react';
import NavBar from '../NavBar/NavBar';
import Footer from '../Footer/Footer';

function App({ children }) {
  return (
    <div className="App">
      <NavBar />
      {children}
      <Footer />
    </div>
  );
}

export default App;
