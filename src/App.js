import React from 'react';
import './App.css';
import ImgPicker from './components/ImagePicker';

function App() {
  return (
    <div className="container">
      <header>
        HEADER
      </header>

      <nav>
        NAVIGATION
      </nav>

      <main>
        MAIN CONTENT
        <ImgPicker />
      </main>

      <aside>
        Sidebar / Ads
      </aside>

      <footer>
        Footer content
      </footer>
    </div>
  );
}

export default App;
