import React from "react";
import products from "../../data/productsData.json";
import { Link } from "react-router-dom";

function TopProducts() {
  let topProducts = [];
  for (let i = 0; i < 3; i++) {
    const number = Math.floor(Math.random() * products.length);
    if (!topProducts.includes(products[number])) {
      topProducts.push(products[number]);
    } else {
      i--;
    }
  }

  return (
    <section>
      <h1
        style={{
          fontSize: "22px",
          color: "#212529",
          margin: "2rem 0",
          fontWeight: "600",
        }}
        className="mt-3"
      >
        Top Products of This Week
      </h1>
      <div className="row products-container justify-content-center align-items-center">
        {topProducts.map((product) => {
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
            </div>
          );
        })}
      </div>
    </section>
  );
}
export default TopProducts;
