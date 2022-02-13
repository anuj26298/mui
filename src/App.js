import React from 'react'
import './App.css'
import HomePage from './components/pages/HomePage/HomePage';
import Sidebar from './components/Sidebar/Sidebar';
import Topbar from './components/TopBar/Topbar'
import { BrowserRouter, Routes,Route } from 'react-router-dom';
import UserList from './components/pages/userlist/UserList';
import User from './components/pages/User/User';
function App() {
  return (
    <BrowserRouter className='App'>
      <Topbar />
      <div className="container">
        <Sidebar />
        <Routes>
          <Route exact path='/' element={<HomePage/>} />
          <Route path='/users' element={<UserList/>}/>
          <Route path='/user/:userId' element={<User/>} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
