import { useEffect, useState } from "react"
import moment from "moment"
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

// const [menuItems] = useState(['Home','Offers','Shop','Contact','Services'])

// const [product,setProduct] = useState({id:1,name:'Baba',salary:45000.00,cities:['Hyd','Blngr','Chennai','Kl'],rating:{rate:403.2,count:6000}});

// const[products] = useState(
//     [
//         {name:"TV",price:45000},
//         {name:"Mobile",price:20000},
//         {name:"Laptop",price:100000},
//         {name:"Bike",price:20000}
//     ]
// )

const[departure] =useState(new Date('2026-05-23 15:12:56'))


// const[weekdays] = useState(['sunday','monday','tuesday','wednesday','thursday','friday','saturday'])
// const[months] = useState(['Jan','Feb','Mar','Apr','May','Jun','July',
//     'Aug','Sep','Oct','Nov','Dec'
// ])  
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
{/*             
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

            </section> */}
{/* 
        <h4>Product Details</h4>
    <dl>
    <dt> Product Id</dt>
    <dd>{product.id}</dd>

    <dt> Product Name</dt>
    <dd>{product.name}</dd>

    <dt> Product Salary</dt>
    <dd>{product.salary.toLocaleString('en-in',{style:'currency',currency:'INR'})}</dd>

    <dt> Shipped To</dt>
        <dd>
            <ol>

                {
                    product.cities.map(city =><li key={city}>{city}</li>)
                    
                }
            </ol>
        </dd>
                <dt>Rating</dt>
                <dd>
                    { product.rating.rate} <span className="bi bi-star-fill text-success"></span>
                    [{product.rating.count}]
                    
                </dd>
    </dl> */}
{/* #========================================== */}
        {/* <h3> Producta Table </h3>

            <table className="table table-hover" >

            <thead>

                <tr>
                    <th>Name</th>
                    <th>Price</th>
                  
                </tr>
            </thead>

            <tbody>
            {

                products.map(product=>
                    <tr key={product}>
                        <td>{product.name}</td>
                        <td>{product.price}</td>
                    </tr>
                )
            }

            </tbody>

            </table> */}
{/* ====================== Dinding Date Type================================ */}
    {/* <h3>Depature : {departure.toDateString()}{weekdays[departure.getDay]}{months[departure.getMonth]}</h3> */}


{/* ====================== Example of Moment================================ */}
        <h3>Depature : {moment(departure).format('DD-MM-YY')}</h3>

        </div>
    )
}