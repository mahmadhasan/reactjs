import { ControlledComponentDemo } from "../../controlled-components/navbar"

export function ControlledComponentDemo(){
    return(
        <div className="container-fluid">
            <Navbar logo="bi bi-amazon bra" brand="Amazon" menuitems={['Home','Shop','Pages','Offers','Contact']}/>

        </div>
    )
}
