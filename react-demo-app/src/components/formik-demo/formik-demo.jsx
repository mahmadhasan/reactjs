import { useFormik } from "formik"

export function FormikDemo(){
    
    function ValidateUser(userDetails){
        var erros = {UserName:'',Age:'',Email:'',City:''};

        if(userDetails.UserName.length===0){
            erros.UserName = "User Name is Required";
        }else{
              if(userDetails.UserName<4){
                erros.UserName = "Name is short";
              }else{    
                erros.UserName = '';
              }
        }

        if(userDetails.Age.length===0){
                erros.Age = 'Age is Required';
        }else{
             if(isNaN(userDetails.Age)){
                erros.Age = 'Age must be a Number';
             }else{
                erros.Age='';
             }
     if(userDetails.City==="-1"){
        erros.City = "Please select your city";
        }else{
            erros.City='';
        }

        }

        return erros;
    }

    


    const formik = useFormik({
        initialValues:{
            UserName:'',
            Age:0,
            Email:'',
            City:''
        },
        validate : ValidateUser,
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
            <button type="submit">Register</button>
        </form>
        </div>
    )
}