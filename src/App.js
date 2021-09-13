import React, { Component, Suspense, lazy } from 'react';
import { compose } from 'redux';
import { Provider, connect } from 'react-redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import store from './redux/reduxStore';
import './App.css';
import HeaderContainer from './components/Header/HeaderContainer.jsx';
import MainMenu from './components/MainMenu/MainMenu.jsx';
import { initializeApp } from './redux/appReducer';
import Preloader from './components/common/Preloader/Preloader';

const ProfilePageContainer = lazy(() => import('./components/ProfilePage/ProfilePageContainer'));
const DialogsPage = lazy(() => import('./components/DialogsPage/DialogsPage.jsx'));
const NewsPage = lazy(() => import('./components/NewsPage/NewsPage.jsx'));
const FriendsPageContainer = lazy(() => import('./components/FriendsPage/FriendsPageContainer.jsx'));
const CommunitiesPage = lazy(() => import('./components/CommunitiesPage/CommunitiesPage.jsx'));
const PhotosPage = lazy(() => import('./components/PhotosPage/PhotosPage.jsx'));
const VideosPage = lazy(() => import('./components/VideosPage/VideosPage.jsx'));
const FilesPage = lazy(() => import('./components/FilesPage/FilesPage.jsx'));
const EventsPage = lazy(() => import('./components/EventsPage/EventsPage.jsx'));
const Login = lazy(() => import('./components/Login/Login'));

class App extends Component {
  componentDidMount() {
    this.props.initializeApp();
  }

  render() {
    if (!this.props.initialized) {
      return <Preloader />
    }

    return (
      <div className="app-wrapper" >
        <HeaderContainer />
        <MainMenu />
        <div className="body">
          <Suspense fallback={<div>Загрузка...</div>}>
            <Switch>
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
            </Switch>
          </Suspense>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  initialized: state.app.initialized,
});

const AppContainer = compose(
  connect(mapStateToProps, { initializeApp })
)(App);

const SamuraiJSApp = (props) => {
  return <Provider store={store}>
    <BrowserRouter>
      <AppContainer state={store.getState()} />
    </BrowserRouter>
  </Provider>
}

export default SamuraiJSApp;