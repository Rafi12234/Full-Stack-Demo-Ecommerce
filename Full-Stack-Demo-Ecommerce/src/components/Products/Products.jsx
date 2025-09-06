import React from 'react'
import Navbar from '../Shared/Navbar/Navbar'
import products from '../../data/productsData.json'
import { Link, useNavigate } from 'react-router-dom'
import Footer from '../Shared/Footer/Footer'
function Products() {
  const Navigate = useNavigate();

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
              
                <div className="cart">
                  <Link to={`/product/${product.id}`} className="text-decoration-none text-black">
                  <img
                    src={product.image}
                    className="cart-img-top img-fluid mx-auto d-block"
                    alt={product.name}
                  />
                  </Link>
                  <div className="d-flex justify-content-between align-items-center p-3">
                    <div className="cart-body">
                      <h5 className="cart-title">{product.name}</h5>
                      <p className="cart-text">৳ {product.price}</p>
                    </div>
                    <div >
                      <button className="btn btn-outline-dark me-2" onClick={() => Navigate(`/product/${product.id}`)}>
                        Details
                      </button>

                      <button className="btn btn-secondary me-2">Buy</button>
                    </div>
                  </div>
                </div>
              
            </div>             )
            })
          }
        </div>
      </div>
      <Footer />
    </section>
  )
}

export default Products
