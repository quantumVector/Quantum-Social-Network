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
import Login from './components/Login/Login';
import { Component } from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { initializeApp } from './redux/appReducer';
import Preloader from './components/common/Preloader/Preloader';


class App extends Component {
  componentDidMount() {
    console.log(this.props)
    this.props.initializeApp();
  }

  render() {
    console.log(this.props)
    if (!this.props.initialized) {
      return <Preloader />
    }

    return (
      <BrowserRouter>
        <div className="app-wrapper" >
          <HeaderContainer />
          <MainMenu />
          <div className="body">
            <Route path='/profile/:userId?' render={() => <ProfilePageContainer state={this.props.state} />} />
            <Route path='/dialogs' render={() => <DialogsPage state={this.props.state} />} />
            <Route path='/news' component={NewsPage} />
            <Route path='/friends' render={() => <FriendsPageContainer />} />
            <Route path='/communities' component={CommunitiesPage} />
            <Route path='/photos' component={PhotosPage} />
            <Route path='/videos' component={VideosPage} />
            <Route path='/files' component={FilesPage} />
            <Route path='/events' component={EventsPage} />
            <Route path='/login' render={() => <Login />} />
          </div>
        </div>
      </BrowserRouter>
    )
  }
}

const mapStateToProps = (state) => ({
  initialized: state.app.initialized,
});

export default compose(
  connect(mapStateToProps, { initializeApp })
)(App);