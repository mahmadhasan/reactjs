export function TodoLogin(props){
    return(
        <div className="container-fluid">
                <form className={`p-4 ${props.width}`}>
                <dl>
                    <dt>UserId</dt>
                    <dd><input type="text" className="form-control"/></dd>
               
                    <dt>Password</dt>
                    <dd><input type="password" className="form-control" /></dd>
                </dl>
                <button className="btn btn-primary w-100">Login</button>
                </form>
        </div>
    )
}