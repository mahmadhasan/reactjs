import { BrowserRouter, Routes, Route} from 'react-router-dom';
import { Link } from 'react-router-dom';

import { ToturialHome } from "./tutorial-home";
import { JavaToturial } from "./java-tutorial";
import { ReactToturial } from "./react-tutorial";

export function ToturialIndex(){

    return(
        <div className="container-fluid">
            <BrowserRouter>
                <header>
                    <h2 className="text-center"> Intex Tutorial</h2>
                    <nav>
                        <span>
                            <span><Link to="/home">Home</Link></span>
                            <span className="mx-5"><Link to="/java">Java tutorial</Link></span>
                            <span className="me-5"><Link to="/react/:topic/:subtopic/:duration">React tutorial</Link></span>
                            <span><Link to="/weather">Weather</Link></span>
                        </span>
                    </nav>
                </header>
                <hr />
                <section>
                    <Routes>
                        <Route path="home" element={<ToturialHome/>}/>
                        <Route path="java" element={<JavaToturial/>}/>
                        <Route path="react" element={<ReactToturial/>}/>
                        <Route path="weather" element={<weatherApp/>}/>           
                        <Route path="*" elemen={<div classNmae="text-warning"><h2>Page Not Found</h2></div>}/>
                   </Routes>
                </section>
            </BrowserRouter>
        </div>
    )
}