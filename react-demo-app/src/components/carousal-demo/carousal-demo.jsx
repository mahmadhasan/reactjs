import { useEffect, useRef, useState } from "react"
import axios from 'axios'; 


export function CarousalDemo(){
    const[product,setProduct] =useState({id:0,title:null,image:null,category:null,description:null,price:0,rating:{rate:0,count:0}});
    const[status,setStatus] =useState('');
    
    let ProductId = useRef(1);

    let th = useRef(null);

     
    function LoadProductManually(id){
        axios.get('https://fakestoreapi.com/products/${id}')
        .then(response=>{
            setProduct(response.data);
        })
    }
    function LoadProductAuto(){
        ProductId.current = ProductId.current+1;
        LoadProductManually(ProductId.current);
    }

    function handlePlayClick(){
     th.current = setInterval(LoadProductAuto,5000);
     setStatus('Slide Show-Started...');
    }

    function handlePauseClick(){
        clearInterval(th.current);
        setStatus('Slide-show-paused');
    }

    function handleNextClick(){
       ProductId.current = ProductId.current+1;
       LoadProductManually(ProductId.current);
       status('Slide Show - Manual');
    }
 
    function handlePreviousClick(){
      ProductId.current = ProductId.current-1;
       LoadProductManually(ProductId.current);
    }

    function handleSeekBarChange(e){
      ProductId.current = e.target.value;
      LoadProductManually(ProductId.current);
    }
    useEffect(()=>{
        LoadProductManually(1);
    },[]);

    return(
    <div className="container-fluid d-flues justify-content-center">
        <div className="card mt-3 p-2 w-50">
            <div className="card-header text-center">
              {product.title}
              <div className="fw-bold">
                {status}
              </div>
            </div>

            <div className="card-body">
                <div className="row">
                    <div className="col-1 d-flex flex-column justifiy-content-center align-items-center">
                     <button onClick={handlePreviousClick} className="bi btn btn-dark bi-chevron-left"></button>
                    </div>
                    <div className="col-10">
                        <div className="badge bg-danger text-white rounded rouneded-circle p-3">{product.price.toLocaleString('en-us',{style:'currency',currency:'USD'})}</div>
                         <img  width="100%" src={product.image}   height="300% "/>
                         <div>
                            <input value={ProductId.current} onChange={handleSeekBarChange} type="range" className="form-range" min="1" max="20" />
                         </div>
                    </div>
                    <div className="col-1 d-flex flex-column justifiy-content-center align-items-center">
                         <button onClick={handleNextClick} className="bi btn btn-dark bi-chevron-right "></button>
                    </div>
                </div>

            </div>

            <div className="card-footer text-center">
              <button onClick={handlePlayClick} className="btn btn-warning bi bi-play"></button>
              <button onClick={handlePauseClick} className="btn btn-danger bi bi-pause mx-2"></button>
            </div>

        </div>
    </div>
 )
}