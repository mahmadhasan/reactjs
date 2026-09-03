import { useFormik } from "formik"
import axios from "axios";
import { useNavigate } from "react-router-dom";
export function TodoRegister(){
    let navigate = useNavigate();
    const formik = useFormik({
        initialValues:{
            user_id:"",
            user_name:"",
            password:"",
            email:""
        },
        onSubmit: (user)=>{
         axios.post(`http://localhost:3000/users`,user) 
         .then(()=>{
            console.log('Registered');
         })  
         alert('Registered successfully');
         navigation("/login");
        }
    });

    return(
        <div className="container-fluid">
                <form className="p-4 w-50" onSubmit={formik.handleSubmit}>
                <dl>
                    <dt>UserId</dt>
                    <dd><input type="text" name="user_id" onChange={formik.handleChange} className="form-control"/></dd>

                    <dt>User Name</dt>
                    <dd><input type="text" name="user_name" onChange={formik.handleChange} className="form-control"/></dd>
                    
                    <dt>Password</dt>
                    <dd><input type="password" name="password" onChange={formik.handleChange} className="form-control" /></dd>

                    <dt>Email</dt>
                    <dd><input type="email" name="email" onChange={formik.handleChange} className="form-control"/></dd>
                </dl>
                <button type="submit" className="btn btn-success w-100">Register</button>
                </form>
        </div>
    )
}