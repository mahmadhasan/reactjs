export function EventBinding(){
    function handleInsertClick(e){
        console.log('ButtonName:${e.target.name}\nButtonId:${e.target.id}\nX Position:${e.clientX}')
    }
    return(
        <div className="container-fluid p-2">
            <button onClick={handleInsertClick} name="Insert" id="btnInsert">Insert</button>
        </div>
    )

    
}