import React from 'react'
import './App.css'
import HomePage from './components/pages/HomePage/HomePage';
import Sidebar from './components/Sidebar/Sidebar';
import Topbar from './components/TopBar/Topbar'
function App() {
  return (
    <div className='App'>
      <Topbar />
      <div className="container">
        <Sidebar />
        <HomePage />
      </div>
    </div>
  );
}

export default App;
