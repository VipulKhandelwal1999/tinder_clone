import React from 'react';
import Header from './components/Header/Header.jsx';
import TinderCards from './components/TinderCards/TinderCards.jsx';
import SwipeButtons from './components/SwipeButtons/SwipeButtons.jsx';
import './App.css';

function App() {
  return (
    <div className='app'>
      <Header />
      <TinderCards />
      <SwipeButtons />
    </div>
  );
}

export default App;
