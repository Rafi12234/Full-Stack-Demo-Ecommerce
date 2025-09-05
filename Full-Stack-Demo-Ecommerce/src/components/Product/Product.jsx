import React from 'react'
import { useParams } from 'react-router-dom';
import products from "../../data/productsData.json";
import Navbar from '../Shared/Navbar/Navbar';
function Product() {

    const {id} = useParams();
    const product = products.find(p => p.id === id); 

  return (
    <section className='bg-brand bg-brand-container'>
      <Navbar/>
        <div className="container">
            <h1 className='fs-4 mt-5 text-center'>Product Details</h1>
            <div className='row justify-content-center align-items-center my-5 g-4'>
                <div className='col-lg-4 justify-content-center align-items-center text-center'>
                    <img style={{borderRadius:'1rem'}} src={product.image} alt={product.name} width={300} className='img-fluid mx-auto d-block my-3' />
                    <button className='btn btn-secondary me-2'>Buy Now</button>
                        <button className='btn btn-outline-dark'>Add to Cart</button> 
                </div>
                <div className='col-lg-8'>
                    <div style={{borderRadius:'1rem'}} className='bg-white p-4 shadow-lg'>
                        <h2>{product.name}</h2>
                        <hr />
                        <p style={{textAlign:'justify'}}>{product.description}</p>
                        <hr />
                        <h4 className='my-4'>Price: ৳ {product.price}</h4>  
                    </div>
                </div>
            </div>
        </div>    
    </section>
  )
}

export default Product
