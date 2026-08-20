import axios from "axios";
import { useEffect, useState } from "react"

export function Fakestore() {
    const[products,setProducts] = useState([{
        id:0,title:null,price:0,description:null,category:null,image:null,rating:{rate:0,count:0}
    }]);

    const[categories,setCategories] = useState([])
    

   function LoadProducts(url){
    axios.get(url).then(response=>{
        setProducts(response.data);
    })
    }

    function LoadCategories(url){
        axios.get(url).then(response=>{
            response.data.unshift("all");
            setCategories(response.data);
        })
    }

     useEffect(()=>{
        LoadProducts("https://fakestoreapi.com/products");
        LoadCategories("https://fakestoreapi.com/products/categories")
     },[]);
    
     return (
        <div className="container-fluid">
            <header className="d-flex align-item-center justify-content-between p-2 bg-light">
                <div>
                    <span className="bi bi-bag"></span>
                    <span className="fs-4 fw-bold">Shopping</span>
                </div>

                <div>
                    <div className="input-group">
                        <input className="form-control" type="text" placeholder="Search shopping.com" />
                        <button className="btn btn-warning bi bi-search"></button>
                    </div>
                </div>

                <div>
                    <button className="btn bi bi-person"></button>
                    <button className="btn bi bi-heart"></button>
                    <button className="btn bi bi-cart4"></button>
                </div>
            </header>
            <section className="row mt-2">
                <nav className="col-2" >

                    <div className="bg-light">
                        <div className="d-flex justify-content-between fw-bold">
                            <span className="text-primary">Filters</span>
                            <span className="text-primary">Clear All</span>
                        </div>
                        <div className="mt-3">
                            <label className="form-label fw-bold">Category</label>
                            <div>
                                <select className="form-select">
                                    {
                                    categories.map(category=>
                                    <option key={category} value={category}>{category}</option>
                                        )
                                    }
                                </select>
                            </div>
                        </div>

                        <div className="mt-4">
                         <label className=" form-label fw-bold">Price Range</label>
                        <input type="range" className="form-range" />
                        </div>
            <div className="mt-3">
                <ul className="list-unstyled">
                    <label className="form-label fw-bold">Ratings</label>
                    <li> 4 <span className="bi bi-star-fill text-warning"></span> <span className="bi bi-star-fill text-warning"></span> <span className="bi bi-star-fill text-warning"></span><span className="bi bi-star-fill text-warning"></span></li>
                    <li> 3 <span className="bi bi-star-fill text-warning"></span> <span className="bi bi-star-fill text-warning"></span><span className="bi bi-star-fill text-warning"></span></li>
                    <li> 2 <span className="bi bi-star-fill text-warning"></span><span className="bi bi-star-fill text-warning"></span></li>
                    <li> 1 <span className="bi bi-star-fill text-warning"></span></li>

                </ul>
            </div>
                    </div>
                </nav>

                <main className="col-10 d-flex flex-wrap">
                    {
                        products.map(product =>
                            <div key={product.id} className="card m-2 p-2 w-25">
                            <img src={product.image} className="card-img-top" height="100" />
                           
                        <div className="card-header">{product.title}</div>
                        <div className="card-body">
                            <dl>
                                <dt>Price</dt>
                                <dd>{product.price}</dd>
                            <dt>Rating</dt>
                            <dd>{product.rating.rate} <span className="bi bi-star-fill text-success"></span></dd>
                            </dl>               
                            </div>
                            <div className="card-footer">
                        <button className="btn w-100 btn-warning bi bi-cart4">Add to cart</button>
                            </div>
                            </div>
                        )
                    }
                </main>
            </section>
        </div>
    )
}