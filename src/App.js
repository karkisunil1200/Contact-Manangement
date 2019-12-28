import React from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Header from './components/Header';
import Contact from './components/Contact';

function App() {
  return (
    <div className='App'>
      <header className='App-header'>
        <Header branding='Contact Manager' />
        <Contact />
      </header>
    </div>
  );
}

export default App;
