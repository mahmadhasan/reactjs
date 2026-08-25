import axios from "axios";
import { useEffect, useState } from "react"

export function KeyDemo(){
    const[users,setUsers] = useState({userName:null});

    const[userMsg,SetuserMsg] = useState('');

    const[userClass,setUserClass] = useState('');

    const[progressWidth,setProgressWidth] = useState({width:null});

    const[strengthColor,setStregthColor] = useState('');

    const[passwordMsg,setPasswordMsg] = useState('');



 

    function LoadUsers(){
        axios.get('users.json')
        .then(response=>{
            setUsers(response.data);
        })
    }
    useEffect(()=>{
        LoadUsers();
    },[])

    function verifyUser(e){
    //    var item = users.find(user=>user.name===e.target.value);
    for( var user of users){
        if(user.userName === e.target.value){
           SetuserMsg('User Name Taken - Try another one..');
           setUserClass('text-danger');
           break;
        }else{
            SetuserMsg('User Name Available...');
            setUserClass('text-success');
        }
    }

    }

function VerifyPassword(e){

    if(e.target.value.match(/(?=.*[A-Z])\w{4,15}/)){
          //strong
          setProgressWidth({width:'100%'});
          setStregthColor('bg-success');
          setPasswordMsg('Strong Password...');
    }else{
        if(e.target.value.length<4){
          //poor
          setProgressWidth({width:'30%'});
          setStregthColor('bg-danger');
          setPasswordMsg('Poor Password')
        }else{
         //weak
         setProgressWidth({width:'80%'});
         setStregthColor('bg-warning');
         setPasswordMsg('Week Password');
        }
    }

}

    return(
        <div className="container-fluid p-4">
            <h3>Register User</h3>
            <dl>
                <dt>UserName</dt>
                <dd><input type="text" onKeyUp={verifyUser} /></dd>
                <dd className={userClass}>{userMsg}</dd>
                <dt>Password</dt>
                <dd>
                    <input onKeyUp={VerifyPassword} className="form-control" type="password" />
                </dd>

                <dd>
                    <div className="progress">
                          <div className={`progress-bar progress-bar-striped progress-bar-animated ${strengthColor}`} style={progressWidth} >
                               {
                                passwordMsg
                               }
                          </div>
                    </div>
                </dd>
            </dl>
        </div>
    )

}