import { TodoLogin } from "./todo-login";
import { TodoRegister } from "./todo-register";
export function TodoHome(){
    return(
        <div className="container-fluid">

            <div  className="row">
                <div className="col">
                    <div className="text-center mt-2 fs-1"><span className="fw-bold text-primary">Master your Day,</span>
                        <br />
                       <span className="fs-3">One Task At a Time</span>
                       <div>
                        <img src="ToDo.jpg" height="300px" className="img-fluid"></img>
                       </div>
                    </div>
                </div>

                <div className="col">
                    <div className="mt-5 ms-4">
                        <ul className="nav nav-tabs">
                            <li className="nav-item"><a href="#login" data-bs-toggle="tab" className="nav-link active">User Login</a></li>
                            <li className="nav-item"><a href="#register" data-bs-toggle="tab" className="nav-link">Register</a></li>
                        </ul>
                        <div className="tab-content">
                            <div className="tap-pane active" id="login">
                                <TodoLogin/>
                            </div>
                            <div className="tab-pane" id="register">
                        <TodoRegister/>
                            </div>
                        </div>
                    </div>
                </div>

            </div>

        </div>
    )
}