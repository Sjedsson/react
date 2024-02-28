import React from 'react';
import './App.css';
import About from './About';
import myImage from './images.jsx/ada.jpg';

function Images() {
  return (
    <div className="image-container">
      <img src={myImage} alt="Ada Lovelace" />
      <div className="name-overlay">Ada Lovelace</div>
    </div>
  );
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
      </header>
      <main>
        <Images />
        <About />
      </main>
      <footer>
      </footer>
    </div>
  );
}

export default App;
