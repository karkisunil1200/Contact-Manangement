import React from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Header from './components/Header';
import Contacts from './components/Contacts';

function App() {
  return (
    <div className='App'>
      <header className='App-header'>
        <Header branding='Contact Manager' />
        <div className='container'>
          <Contacts />
        </div>
      </header>
    </div>
  );
}

export default App;
