import { BrowserRouter, Routes, Route,Link } from 'react-router-dom';
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
                            <span><link to="/home">Home</link></span>
                            <span className="mx-5"><link to="/java">Java tutorial</link></span>
                            <span className="me-5"><link to="/react">React tutorial</link></span>
                            <span><link to="/weather">Weather</link></span>

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
                   </Routes>
                </section>
            </BrowserRouter>
        </div>
    )
}