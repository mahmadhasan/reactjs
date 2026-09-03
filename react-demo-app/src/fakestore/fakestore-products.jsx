import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
export function FakestoreProducts(){
    let params = useParams();
    const[products,setProduccts] = useState([{id:0,title:null,price:0,image:null,description:null,category:null,rating:{rate:0,count:0}}]);
    
    function LoadProducts(){
        axios.get(`https://www.fakestoreapi.com/products/category/${params.category}`)
        .then(response=>{
            setProduccts(response.data);
        })
    }

    useEffect(()=>{
        LoadProducts();
    },[])

    return(
        <div className="container-fluid mt-5">
            <h2>Products</h2>
           <div>
            {
            products.map(product=>
            <div className="card m-2 p-2" style={{width:'150px'}} key={product.id}>
                <img src={product.image} height='100px' className="card-img-top"/>
            </div>)  
            }
            </div>
            <Link to="/">Back To Categories</Link>
            

        </div>
    )
}