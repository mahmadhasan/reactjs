import { useFormik } from "formik"

export function FormikDemo(){
    const formik = useFormik({
        initialValues:{
            UserName:'',
            Age:0,
            Email:'',
            City:''
        },
        onSubmit:(user)=>{console.log(user);
                     }
    })    

    return(
        <div className="container-fluid">
        <h4>User-Registration</h4>
        <form onSubmit={formik.handleSubmit}>
            <dl>
                <dt>User-Name</dt>
                <dd><input type="text" onChange={formik.handleChange}  name="UserName"/></dd>

                <dt>User-Age</dt>
                <dd><input type="text" onChange={formik.handleChange} name="Age" /></dd>
                
                <dt>User-Email</dt>
                <dd><input type="text" onChange={formik.handleChange} name="Email"/></dd>

                <dt>User-City</dt>
                <dd>
                    <select onChange={formik.handleChange} name="City">
                        <option>Select City</option>
                        <option>Hyderabad</option>
                        <option>Delhi</option>
                    </select>
                </dd>
            </dl>
            <button type="submit">Register</button>
        </form>
        </div>
    )
}