import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import './App.css';
import HeaderContainer from './components/Header/HeaderContainer.jsx';
import MainMenu from './components/MainMenu/MainMenu.jsx';
import DialogsPage from './components/DialogsPage/DialogsPage.jsx';
import NewsPage from './components/NewsPage/NewsPage.jsx';
import FriendsPageContainer from './components/FriendsPage/FriendsPageContainer.jsx';
import CommunitiesPage from './components/CommunitiesPage/CommunitiesPage.jsx';
import PhotosPage from './components/PhotosPage/PhotosPage.jsx';
import VideosPage from './components/VideosPage/VideosPage.jsx';
import FilesPage from './components/FilesPage/FilesPage.jsx';
import EventsPage from './components/EventsPage/EventsPage.jsx';
import ProfilePageContainer from './components/ProfilePage/ProfilePageContainer';


function App(props) {
  return (
    <BrowserRouter>
      <div className="app-wrapper">
        <HeaderContainer />
        <MainMenu />
        <div className="body">
          <Route path='/profile/:userId?' render={() => <ProfilePageContainer state={props.state} />} />
          <Route path='/dialogs' render={() => <DialogsPage state={props.state} />} />
          <Route path='/news' component={NewsPage} />
          <Route path='/friends' render={() => <FriendsPageContainer />} />
          <Route path='/communities' component={CommunitiesPage} />
          <Route path='/photos' component={PhotosPage} />
          <Route path='/videos' component={VideosPage} />
          <Route path='/files' component={FilesPage} />
          <Route path='/events' component={EventsPage} />
        </div>
      </div>
    </BrowserRouter>
  );

  /* return (
    <BrowserRouter>
      <div className="app-wrapper">
        <Header />
        <MainMenu />
        <div className="body">
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
  ); */
}

export default App;