import { useState } from "react"

export function FormDemo(){
    const[uname,setUserName] = useState('');
    const[age,setAge] = useState(0);
    const[email,setEmail] = useState('');
    const[city,setCity] = useState('');

    function handleName(e){
        setUserName(e.target.value);
    }

    function handleAge(e){
        setUserName(e.target.value);
    }

    function handleEmail(e){
        setUserName(e.target.value);
    }

    function handleCity(e){
        setUserName(e.target.value);
    }

    function handleRegisterClick(e){
        e.preventDefault();
//console.log('${{UserName:uname,Age:age,Email:email,City:city,}}');
console.log('UserName:${uname}\n Age:${age}\n Email:${email} \n City:${city}');
    }
    return(
        <div className="container-fluid">
        <h4>User-Registration</h4>
        <form action="">
            <dl>
                <dt>User-Name</dt>
                <dd><input type="text" onChange={handleName}/></dd>

                <dt>User-Age</dt>
                <dd><input type="text" onChange={handleAge} /></dd>
                
                <dt>User-Email</dt>
                <dd><input type="text" onChange={handleEmail}/></dd>

                <dt>User-City</dt>
                <dd>
                    <select onChange={handleCity}>
                        <option>Select City</option>
                        <option>Hyderabad</option>
                        <option>Delhi</option>
                    </select>
                </dd>
            </dl>
            <button onClick={handleRegisterClick}>Register</button>
        </form>
        </div>
    )
}