import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import '../node_modules/bootstrap-icons/font/bootstrap-icons.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.js';
import { ThrottleDemo } from './components/throttle-demo/throttle-demo.jsx';
// import 'bootstrap/dist/css/bootstrap.min.css';

// import App from './App.jsx'
// import { Login } from './components/login/login.jsx';
//import { DataBinding } from './components/data-binding/data-binding.jsx';
// import { InoxMovies } from './components/inox/inox.jsx';
//import { Fakestore } from './components/fakestore/fakestore.jsx';
//import { EventBinding } from './components/event-binding/event-binding.jsx';
//import { MouseDemo } from './components/mouse-events/mous-demo.jsx';
//import { MouseAnimation } from './components/mouse-animation/mouse-animation.jsx';
//import { MouseMove } from './components/mousemove/mouse-move.jsx';
//import { KeyDemo } from './components/key-demo/key-demo.jsx';
//import { ButtonDemo } from './components/button-demo/button-demo.jsx';
//import { ElementState } from './components/element-state/element-state.jsx';
//import { EmiCalculator } from './components/emi-calculator/emi-calculator.jsx';
//import { DebounceDemo } from './components/debounce-demo/debounce-demo.jsx';

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
        {/* <MouseAnimation/> */}
        {/* <MouseMove/> */}
        {/* <KeyDemo/> */}
        {/* <ButtonDemo/> */}
        {/* <ElementState/> */}
        {/* <EmiCalculator/> */}
        {/* <DebounceDemo/> */}
        <ThrottleDemo/>
  </StrictMode>,
)
