import {Formik,Form,Field,ErrorMessage} from "formik";
import * as yup from 'yup';


export function FormikFormDemo(){
    return(
        <div className="container-fluid">
            <h2> Register User</h2>

            <Formik initialValues={{UserName:'',Mobile:'',Email:''}} validationSchema={yup.object({UserName:yup.string().required('UserName is required').min(5,'UserName lenght must be 5 chars').max(10,'UserName is not more than 10 chars'),Mobile:yup.string().required('Mobile number is required').matches(/\+91\d{10}/),Email:yup.string().required('Email is required').max(10,'Email containes 10 chars')})} onSubmit={(user)=>console.log(user)}>
                <Form>
                    <dl>
                        <dt>UserName</dt>
                        <dd><Field type="text" name="UserName"/></dd>
                        <dd className="text-danger"><ErrorMessage name="UserName"/></dd>

                        <dt>Mobile</dt>
                        <dd><Field type="text" name="Mobile"/></dd>
                        <dd className="text-danger"><ErrorMessage name="Mobile"/></dd>
                        <dt>Email</dt>
                        <dd><Field type="text" name="Email"/></dd>
                        <dd type="text-danger"><ErrorMessage name="Email"/></dd>
                    </dl>
                    <button disabled={(Formik.isValid)?false:true} type="submit">Register</button>
                </Form>
            </Formik>

        </div>
    )
}