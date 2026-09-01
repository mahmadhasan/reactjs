import { useRef } from "react";

export function FormDemo19X(){
    const nameRef = useRef(null);
    const mobileRef = useRef(null);

   function handleSubmit(e){
        e.preventDefault();
        // let formData = new FormData(e.target);
        console.log('UserName:${nameRef.current}\nMobile:${mobileRef.current}');

    }

    return(
        <div>
            <form onSubmit={handleSubmit}>
                <dl>
                <dt>UserName</dt>
                <dd><input type="text" ref={nameRef} name="UserName" /></dd>

                <dt>Mobile</dt>
                <dd><input type="text" ref={mobileRef} name="Mobile" /></dd>
                </dl>
                <button type="submit">submit</button>
            </form>
        </div>
    )
}