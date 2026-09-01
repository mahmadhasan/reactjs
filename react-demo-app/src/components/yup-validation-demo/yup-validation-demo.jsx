import { useFormik } from "formik"

import * as yup from 'yup';

export function YupValidationDemo(){
    
    const formik = useFormik({
        initialValues:{
            UserName:'',
            Age:0,
            Email:'',
            City:''
        },
        validationSchema:yup.object({
            UserName:yup.string().required('user name is required').min(4,'Name is too short'),
            Age:yup.number().required('Age is required').min(18,'Min age is 18').max(30,'Max age is 30'),
            Email:yup.string().required('user emial is required').min(5,'Eamil min length is 5').max(10,'Email Max Length is 10'),
        }),

        onSubmit:(user)=>{console.log(user);
                     }
    })    

    return(
        <div className="container-fluid">
        <h4>User-Registration</h4>
        <form onSubmit={formik.handleSubmit}>
            <dl>
                <dt>User-Name</dt>
                <dd><input type="text" onBlur={formik.handleBlur} onChange={formik.handleChange}  name="UserName"/></dd>
                <dd className="text-danger">{formik.errors.UserName}</dd>
                <dt>User-Age</dt>
                <dd><input type="text" onChange={formik.handleChange} name="Age" /></dd>
                <dd className="text-danger">{formik.errors.Age}</dd>
                <dt>User-Email</dt>
                <dd><input type="text" onChange={formik.handleChange} name="Email"/></dd>

                <dt>User-City</dt>
                <dd>
                    <select onChange={formik.handleChange} name="City">
                        <option value="-1">Select City</option>
                        <option value="hyderabad">Hyderabad</option>
                        <option value="Delhi">Delhi</option>
                    </select>
                </dd>
                <dd className="text-danger">{formik.errors.City}</dd>
            </dl>
            <button type="submit" disabled={(formik.isValid?false:true)}>Register</button>
            {/* //<button disabled={(formik.dirty)?false:true} className="mx-4">Save</button> */}
            <button className={(formik.dirty)?'d-inline':'d-done'}>save</button>
        <div className="text-danger">
            <h3> Please Check The Following Errors In Form </h3>
            <ul>
                {
                    Object.values(formik.errors).map(error=><li key={error}>{error}</li>)
                }
            </ul>
        </div>
        </form>
        </div>
    )
}