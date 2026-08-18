import { useEffect, useState } from "react"

export function DataBinding(){
//    var userName ="Baba";
// const [getPrice,setPrice] = useState(4500000.000);
// const[name,setName] = useState('please set name');
// const[views,setView] = useState(0);
// useEffect(()=>{
//     setPrice(4000);
//     setName("Baba");
//     setView(670148)
// },[]);
const[products,setProducts] = useState(['TV','Laptop','Wash-Machine','BeautyCare']);
const[categories,setCategories] = useState(new Array('Electronics','Fashion'));


    return(
        <div className="control-fluid">

            {/* <h2>Data-Binding</h2>
            <p>Hello ! {userName}</p> */}
{/*             
            <p>Price={getPrice}</p>
            <p>{name}</p>
            <p className="bi bi-eye-fill">{views.toLocaleString('en-us',
                {notation:'compact'})} views</p> */}

            <ol>
              {
              products.map((product,index) => <li key={index}>{product}</li>)               
             }
            </ol>
            <ol>
                {
                 categories.map(category => <li>{category}</li>) 
                }
            </ol>
             {/* <select>
                {
                    products.map(product => <Option>{product}</Option>)
                }

             </select> */}
        </div>
    )
}