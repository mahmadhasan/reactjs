export function Navbar(props){
    return(
        <nav className="d-fplex justify-content-between align align-items-center p-2 border border-2 border-secondary">
            <div>
                <span className="{props.logo}"></span>
                <span className="fw-bold">{props.brand}</span>
            </div>

            <div>
                {
               props.menuitems.map(item=><span className="mx-3" key={item}>{}</span>)  
                }
            </div>

            <div>
                <span className="bi bi-heart"></span>
                <span className="bi bi-person"></span>
                <span className="bi bi-gift-box"></span>
            </div>

        </nav>
    )
}