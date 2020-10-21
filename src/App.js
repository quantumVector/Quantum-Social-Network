import React from 'react';
import './App.css';
import Header from './components/Header/Header.jsx';
import LeftSidebar from './components/LeftSidebar/LeftSidebar.jsx';
import RightSidebar from './components/RightSidebar/RightSidebar.jsx';
import PageBody from './components/PageBody/PageBody.jsx';


function App() {
  return (
    <div className="app-wrapper">
      <Header />
      <LeftSidebar />
      <RightSidebar />
      <PageBody />
    </div>
  );
}

export default App;