
export function FormDemo19X(){

   function handleSubmit(e){
        e.preventDefault();
        let formData = new FormData(e.target);


    }

    return(
        <div>
            <form onSubmit={handleSubmit}>
                <dl>
                <dt>UserName</dt>
                <dd><input type="text" name="UserName" /></dd>

                <dt>Mobile</dt>
                <dd><input type="text" name="Mobile" /></dd>
                </dl>
                <button type="submit">submit</button>
            </form>
        </div>
    )
}