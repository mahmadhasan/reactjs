import './login.css';
export function Login(){
    return(
       <div className="login-container">
         <form className="form-container w-25 alert alert-dismissable alert-warning">
            <h3 className='bi bi-person-circle'>User-Ligin</h3>
            <button data-bs-dismiss="aler" className='btn btn-close'></button>
            <dl>
            <dt>User Name</dt>
            <dd><input type="text" className='form-control'/></dd>
            <dt>Password</dt>
            <dd><input type="password" className='form-control'/></dd>
            </dl>
            <button className='btn btn-warning w-100'>Login</button>
        </form>
       </div>
    )
}