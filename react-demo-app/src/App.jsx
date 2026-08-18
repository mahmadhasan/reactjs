import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import {Login}from './components/login/login' 
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import '../node_modules/bootstrap-icons/font/bootstrap-icons.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.js';


function App() {

  return (
    <div>
    {/* <h1>Welcome To React 19+</h1> */}
    <Login/>
    </div>
  )
}

export default App
