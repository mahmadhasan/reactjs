import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
// import App from './App.jsx'
// import { Login } from './components/login/login.jsx';
//import { DataBinding } from './components/data-binding/data-binding.jsx';
import { InoxMovies } from './components/inox/inox.jsx';
createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* //<App /> */}
    {/* <Login/> */}
    {/* <DataBinding/> */}
    {/* <flipkart/> */}
    
    <InoxMovies/>
  </StrictMode>,
)
