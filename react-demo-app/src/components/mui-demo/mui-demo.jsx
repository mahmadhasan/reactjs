import { TextField,Button } from '@mui/material';
import { useFormik } from 'formik';

export function MUIDemo(){
    const formik = useFormik({
        initialValues:{
            UnserName:'',
            Password:''
        },
        onSubmit:(userdata)=>{
            console.log(userdata);
        }
    });
    return(
        <div className="container-fluid">
            <div className="mt-2 row">
                <div className="col">
                    <h2>Bootstrap Login</h2>
                    <form className="w-25">
                    <div className="mb-2">
                        <label className="form-label">UserName</label>
                    </div>
                    <div>
                        <input type="text" className="form-control"/>
                    </div>

                    <div className="mb-2">
                        <label className="form-label">password</label>
                    </div>
                    <div>
                        <input type="password" className="form-control"/>
                    </div>
                    <button className="btn btn-danger w-100 mt-2" type="submit">login</button>
                </form>
                </div>
                <div className="col">
                <h2>MUI Login</h2>
                
                <form className="w-50" onSubmit={formik.handleSubmit}>
                    <div className='mb-2'>
                    <TextField onChange={formik.handleChange} name="UserName" type="text" label="user name" variant='standard'/>
                    </div>

                    <div className='mb-2'>
                    <TextField onChange={formik.handleChange} name="password" type="password" label="password" variant='standard'/>
                    </div>
                    <div>
                        <Button type='submit' className='w-100' color="warning" variant='contained'>Login</Button>
                    </div>

                </form>
                
                </div>
            </div>
        </div>
    )
}