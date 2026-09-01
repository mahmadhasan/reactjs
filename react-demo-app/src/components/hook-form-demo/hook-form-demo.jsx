import { useForm } from "react-hook-form"

export function ReactHookFormDemo(){
   const{register,handleSubmit,formState:{errors}} = useForm();
   const submit  = (user)=>{
    console.log(user);
   } 
    return(
        <div className="container-fluid">
            <form onSubmit={handleSubmit(submit)}>
            <h2>Register User</h2>
            <dl>
                <dt>UserName</dt>
                <dd><input type="text" {...register("UserName",{required:true,minLength:4})} name="UserName"/></dd>
                <dd className="text-danger">
                    {
                    (errors.UserName?.type==="required")?<span>User Name Required</span>: <span></span>
                    &&
                    (errors.UserName?.type==="minLength")?<span>Name is too short</span>:<span></span>
                    }
                </dd>               
                <dt>Mobile</dt>
                <dd><input type="text" {...register('Mobile',{required:true,pattern:/\+91\d{10}/})} name="Mobile"/></dd>
                <dd className="text-danger">
                    {
                        (errors.Mobile?.type==="required")?<span>Mobile Required</span>:<span></span>
                        &&
                        (errors.Mobile?.type==="pattern")?<span>Invalid Mobile +91 44545435210</span>:<span></span>
                        
                    }

                </dd>

            </dl>
            <button type="submit">submit</button>
            </form>
        </div>
        
    )

}