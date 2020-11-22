import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header.jsx';
import MainMenu from './components/MainMenu/MainMenu.jsx';
import HomePage from './components/HomePage/HomePage.jsx';
import DialogsPage from './components/DialogsPage/DialogsPage.jsx';
import NewsPage from './components/NewsPage/NewsPage.jsx';
import FriendsPage from './components/FriendsPage/FriendsPage.jsx';
import CommunitiesPage from './components/CommunitiesPage/CommunitiesPage.jsx';
import PhotosPage from './components/PhotosPage/PhotosPage.jsx';
import VideosPage from './components/VideosPage/VideosPage.jsx';
import FilesPage from './components/FilesPage/FilesPage.jsx';
import EventsPage from './components/EventsPage/EventsPage.jsx';


function App(props) {
  return (
    <BrowserRouter>
      <div className="app-wrapper">
        <Header />
        <MainMenu />
        <div className="body">
          <Route path='/home' render={ () => <HomePage state={props.state} /> } />
          <Route path='/dialogs' render={ () => <DialogsPage state={props.state} /> } />
          <Route path='/news' component={NewsPage} />
          <Route path='/friends' component={FriendsPage} />
          <Route path='/communities' component={CommunitiesPage} />
          <Route path='/photos' component={PhotosPage} />
          <Route path='/videos' component={VideosPage} />
          <Route path='/files' component={FilesPage} />
          <Route path='/events' component={EventsPage} />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;