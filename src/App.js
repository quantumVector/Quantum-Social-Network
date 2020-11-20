import React from 'react';
import './App.css';
import Header from './components/Header/Header.jsx';
import MainMenu from './components/MainMenu/MainMenu.jsx';
import HomePage from './components/HomePage/HomePage.jsx';
import DialogsPage from './components/DialogsPage/DialogsPage.jsx';
import { BrowserRouter, Route } from 'react-router-dom';


function App() {
  return (
    <BrowserRouter>
      <div className="app-wrapper">
        <Header />
        <MainMenu />
        <div className="body">
          <Route path='/home' component={HomePage} />
          <Route path='/dialogs' component={DialogsPage} />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;