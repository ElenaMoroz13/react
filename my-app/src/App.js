import logo from './logo.svg';
import React from 'react'
import './App.css';
import Header from './components/header/header';
import Nav from './components/nav/nav';
import Profile from './components/profile/profile';
import Dialogs from './components/dialogs/dialogs';
import {BrowserRouter , Route, Routes} from 'react-router-dom'



const App = (props) => {

  return(
    <BrowserRouter>
    <div className='app-wrapper'>
      <Header />
      <Nav />
      <div className='app-wrapper-content'>
      <Routes>
        <Route path='/dialogs' element={<Dialogs state={props.state.dialogsPage}/>}/>
        <Route path='/profile' element={<Profile state={props.state.profilePage}/>}/>
      </Routes>
      </div>
    </div> 
    </BrowserRouter>
  );
};

export default App;