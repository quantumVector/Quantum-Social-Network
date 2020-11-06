import React from 'react';
import './App.css';
import Header from './components/Header/Header.jsx';
import LeftSidebar from './components/LeftSidebar/LeftSidebar.jsx';
import HomePage from './components/HomePage/HomePage.jsx';
import DialogsLeftBlock from './components/DialogsLeftBlock/DialogsLeftBlock.jsx';


function App() {
  return (
    <div className="app-wrapper">
      <Header />
      <LeftSidebar />
      <div className="body">
        <HomePage />
        {/* <DialogsLeftBlock /> */}
      </div>
    </div>
  );
}

export default App;