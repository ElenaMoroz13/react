import logo from './logo.svg';
import React from 'react'
import './App.css';
import Header from './components/header/header';
import Nav from './components/nav/nav';
import Profile from './components/profile/profile';
import Dialogs from './components/dialogs/dialogs';
import {BrowserRouter , Route, Routes} from 'react-router-dom'


const App = () => {
  return(
    <BrowserRouter>
    <div className='app-wrapper'>
      <Header />
      <Nav />
      <div className='app-wrapper-content'>
      <Routes>
        <Route path='/dialogs' component={Dialogs}/>
        <Route path='/profile' component={Profile}/>
      </Routes>
      </div>
    </div>
    </BrowserRouter>
  )
};

export default App;