import React from 'react'
import Navbar from '../Shared/Navbar/Navbar'
import products from '../../data/productsData.json'
import { Link } from 'react-router-dom'
function Products() {
  return (
    <section className='bg-brand bg-brand-container'>
        <Navbar />
      <div className='container'>
        
        <h1>Products</h1>
        <br />
        <div className='row products-container justify-content-center align-items-center'>
          {
            products.map(product => {
              return (
                <div
              key={product.id}
              className="cart-deck col-lg-3 col-md-5 col-sm-8 mx-2 my-3"
            >
              <Link to={`/product/${product.id}`} className="text-decoration-none text-black">
                <div className="cart">
                  <img
                    src={product.image}
                    className="cart-img-top img-fluid mx-auto d-block"
                    alt={product.name}
                  />
                  <div className="d-flex justify-content-between align-items-center p-3">
                    <div className="cart-body">
                      <h5 className="cart-title">{product.name}</h5>
                      <p className="cart-text">৳ {product.price}</p>
                    </div>
                    <div>
                      <button className="btn btn-outline-dark me-2">
                        Details
                      </button>

                      <button className="btn btn-secondary me-2">Buy</button>
                    </div>
                  </div>
                </div>
              </Link>
            </div>             )
            })
          }
        </div>
      </div>
    </section>
  )
}

export default Products
