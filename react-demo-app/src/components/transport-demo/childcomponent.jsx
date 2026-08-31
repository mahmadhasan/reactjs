export function ChildComponentDemo({onChildClick}){

    function handleClick(){
        let data = 'Hello From Child...';
        onChildClick(data);
    }
    return(
        <div className="p-4 bg-warning">
            <h4>ChildComponent</h4>
            <button onClick={handleClick} className="btn btn-light">send data to parent</button>
        </div>
    )
}