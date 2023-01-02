import logo from './logo.svg';
import React from 'react'
import './App.css';
import Header from './components/header/header';
import Nav from './components/nav/nav';
import Profile from './components/profile/profile';
import Dialogs from './components/dialogs/dialogs';
import {BrowserRouter , Route, Routes} from 'react-router-dom'
import Sidebar from './components/nav/sidebar/sidebar'



const App = (props) => {

  return(
    <BrowserRouter>
    <div className='app-wrapper'>
      <Header />
      <Nav />
      <Sidebar friends={props.friends}/>
      <div className='app-wrapper-content'>
      <Routes>
        <Route path='/dialogs' element={<Dialogs dialogs={props.dialogs} messages={props.messages}/>}/>
        <Route path='/profile' element={<Profile posts={props.posts}/>}/>
      </Routes>
      </div>
    </div> 
    </BrowserRouter>
  );
};

export default App;