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
// const[products,setProducts] = useState(['TV','Laptop','Wash-Machine','BeautyCare']);
// const[categories,setCategories] = useState(new Array('Electronics','Fashion'));

const [menuItems] = useState(['Home','Offers','Shop','Contact','Services'])

    return(
        <div className="control-fluid">

            {/* <h2>Data-Binding</h2>
            <p>Hello ! {userName}</p> */}
{/*             
            <p>Price={getPrice}</p>
            <p>{name}</p>
            <p className="bi bi-eye-fill">{views.toLocaleString('en-us',
                {notation:'compact'})} views</p> */}
{/* 
            <ol>
              {
              products.map((product,index) => <li key={index}>{product}</li>)               
             }
            </ol>
            <ol>
                {
                 categories.map(category => <li>{category}</li>) 
                }
            </ol> */}
             {/* <select>
                {
                    products.map(product => <Option>{product}</Option>)
                }

             </select> */}
            
            <header className="p-1 mt-2 align-items-center bg-light d-flex justify-content-between">
                <div>
                    <span className="bi bi-justify"></span>
                    <span className="mx-2">Amazon</span>
                </div>
                <div className="input-group">
                    <input type="text" className="form-control" placeholder="Search Amazon" />
                    <button className="btn btn-warning bi bi-search"></button>
                </div>
                <nav>
                    {
                        menuItems.map(item => <span className="mx-3" key={item}>{item}</span>)
                    }
                </nav>
            </header>
            <section className="mt-3">
                <ul className="list-group w-25">
                    {
                        menuItems.map(item => <li className="list-group-item list-group-item-danger" key={item}>{item}</li>)
                    }
                </ul>

            <ul className="list-unstyled">
                    {
                        menuItems.map(item =><li key={item}><input type="checkbox" /><label/>{item}</li>)

                    }
            </ul>

            </section>
        </div>
    )
}