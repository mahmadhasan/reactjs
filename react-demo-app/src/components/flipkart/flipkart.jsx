import { useEffect, useState } from "react";

export function Flipkart(){

    const[product,setProduct] = useState({title:null,price:0,image:null,rating:{rate:0,ratings:0,reviews:0},offers:[]});

    function LoadData(){
        // var http = new XMLHttpRequest();
        // http.open("get","product.json",true);
        // http.send();
        // http.onreadystatechange = function (){
        //  if(http.readyState===4){
        //     // console.log(JSON.parse(http.responseText));
        //     setProduct(JSON.parse(http.responseText));
        //  }
        // }
        fetch("product.json")
            .then(function(response){
                return response.json();
            })
            .then(function(product){
                setProduct(product);
            })
    }
    useEffect(() => {
        LoadData();
            }, []);

    
    return(
        <div className="container-fluid">
            <div className="mt-4">
               <div className="row">
                    <div className="col-3">
                    <img width="100%"   src="{product.image}"/>
                    </div>
                    <div className="col-9">
                            <div className="fs-4">{product.title}</div>
                            <div className="mt-2">
                                <span className="badge bg-success text-white rounded">{product.rating.rate} <span className="bi bi-star-f"></span></span>
                                <span className="mx-2 text-secondary fw-bold">{product.rating.ratings.toLocaleString('en-in')} ratings & {product.rating.reviews.toLocaleString('en-in')} reviews</span>
                            </div>
                        <div className="mt-3 h1 fs-3 fw-bold">{product.price.toLocaleString('en-in',{style:'currency',currency:'INR',minimumFractionDigits:0,maximumFractionDigits:0})}</div>
                        <div className="mt-4">
                         <h4>Available Offers</h4>
                            <ul>
                                {
                                    product.offers.map(offer => 
                                        <li key={offer}><span>{offer}</span></li>
                                    )
                                }
                            </ul>
                            </div>
                    </div>
               </div>

            </div>

        </div>
    )
}