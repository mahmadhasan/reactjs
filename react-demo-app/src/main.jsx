import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import '../node_modules/bootstrap-icons/font/bootstrap-icons.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.js';
// import 'bootstrap/dist/css/bootstrap.min.css';

// import App from './App.jsx'
// import { Login } from './components/login/login.jsx';
//import { DataBinding } from './components/data-binding/data-binding.jsx';
// import { InoxMovies } from './components/inox/inox.jsx';
//import { Fakestore } from './components/fakestore/fakestore.jsx';
//import { EventBinding } from './components/event-binding/event-binding.jsx';
//import { MouseDemo } from './components/mouse-events/mous-demo.jsx';
import { MouseAnimation } from './components/mouse-animation/mouse-animation.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* //<App /> */}
    {/* <Login/> */}
    {/* <DataBinding/> */}
    {/* <flipkart/> */}
        {/* <InoxMovies/> */}
        {/* <Fakestore/> */}
        {/* <EventBinding/> */}
        {/* <MouseDemo/> */}
        <MouseAnimation/>
  </StrictMode>,
)
