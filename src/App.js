import logo from './logo.svg';
import Navbar from '../src/components/Navbar'
import './App.css'
import Profile from '../src/components/Profile'
import Project from '../src/components/Project'
import Experience from '../src/components/Experience'
import Academics from '../src/components/Academics'
import {useState} from 'react'



function App() {

  
  return (
    <div className="App">
    
    <Navbar/>
    <Profile/>
    <Project />
    <Experience/>
    <Academics/>
    </div>
  );
}

export default App;
