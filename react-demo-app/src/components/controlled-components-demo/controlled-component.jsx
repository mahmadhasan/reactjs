import { useState } from "react"
import { ControlledComponentDemo } from "../../controlled-components/navbar"
import { DataGridDemo } from "./data.grid";

export function ControlledComponentDemo(){
    const[products,setProducts] = useState([{Name:"TV",Price:5000},{Name:"Mobile",Price:50000}]);

    return(

        <div className="container-fluid">
            <DataGridDemo caption="Products Table" data={products}/>
        </div>
        // <div className="container-fluid">
        //     <Navbar logo="bi bi-amazon bra" brand="Amazon" menuitems={['Home','Shop','Pages','Offers','Contact']}/>

        // </div>

    )
}
