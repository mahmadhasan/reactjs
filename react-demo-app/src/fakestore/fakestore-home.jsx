import axios from "axios";
import { useEffect, useState } from "react"
import { Link } from "react-router-dom";
export function FakestoreHome(){
    const[categories,setCategory] = useState([]);

    function LoadCategories(){
        axios.get('https://fakestoreapi.com/products/categories')
        .then(response=>{
            setCategory(response.data);
        })
    }

    useEffect(()=>{
        LoadCategories();
    },[])

    return(
        <div className="container-fluid mt-5">
            <h2>Shoppong Home</h2>
            <ul className="list-group w-25">
                {
            categories.map(category=><li className="list-group-item my-2 list-group-item-secondary" key={category}><span><Link className="btn" to={`products/${category}`}>{category.toUpperCase()}</Link></span></li>)
                }
            </ul>
        </div>
    )
}