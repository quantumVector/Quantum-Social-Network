import React from 'react';
import './App.css';
import Header from './components/Header/Header.jsx';
import MainMenu from './components/MainMenu/MainMenu.jsx';
import HomePage from './components/HomePage/HomePage.jsx';
import DialogsPage from './components/DialogsPage/DialogsPage.jsx';


function App() {
  return (
    <div className="app-wrapper">
      <Header />
      <MainMenu />
      <div className="body">
        <HomePage />
        {/* <DialogsPage /> */}
      </div>
    </div>
  );
}

export default App;