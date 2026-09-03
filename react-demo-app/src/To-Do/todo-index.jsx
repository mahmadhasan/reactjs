import { BrowserRouter,Routes,Route} from "react-router-dom"
import { TodoHome } from "./todo-home"
import { TodoLogin } from "./todo-login"
import { TodoRegister } from "./todo-register"
export function TodoIndex(){
    return(
        <div className="container-fluid">

        <BrowserRouter>
        <header className="p-3 m-1 bg-light d-flex justify-content-between">
            <div>
            <span className="fs-4 bi bi-pencil-square"></span>
            <span className="fs-4 fw-bold">Task Manager</span>
            </div>

            <div>
                <button className="btn me-2">Features</button>
                <button className="btn">Pricing</button>
                <button className="btn mx-2">About</button>
                <button className="btn btn-primary">Get Started</button>
            </div>
            </header>
            <section className="mt-2">
            <Routes>
                <Route path="/" element={<TodoHome/>}/>
                <Route path="login" element={<TodoLogin/>}/>
                <Route path="register" element={<TodoRegister/>}/>

            </Routes>
            </section>

        </BrowserRouter>

        </div>
    )
}