export function ButtonDemo(){

    function handleDoubleClick(){
        window.open('img-1.png','Iphone','width=300 height=400');
    }

    function handleContextMenu(){
        document.oncontextmenu = ()=>{
            alert('Right click not allowed');
            return false;
        }
    }

function handleSelection(){
    document.onselectstart = ()=> false;

}

    return(
        <div onselect={handleSelection} oncontextmenu={handleContextMenu} className="container-fluid p-4">
               {/* <h1>Hello</h1> */}
          <img onDoubleClick={handleDoubleClick}  src="img-1.png" width='50' height='50'/>
          <p>Double Click To View Large</p>
        </div>
    )
}