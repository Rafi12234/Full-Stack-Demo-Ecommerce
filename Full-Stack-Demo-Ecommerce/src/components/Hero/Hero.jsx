import React from 'react'
import camera from '../../images/hero/camera.jpg'
import smartwatch from '../../images/hero/smartwatch.jpg'
import earphone from '../../images/hero/earphone.jpg'
function Hero() {
  return (
   <div id="carouselExampleCaptions" className="carousel slide">
  <div className="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div className="carousel-inner">
    <div className="carousel-item active" data-bs-interval="1000">
      <img src={camera} class="img-fluid mx-auto d-block" width={500} alt="..."/>
      <div className="carousel-caption d-none d-md-block">
        <h5 style={{fontSize:'24px', fontWeight:'700'}}>Polaroid Camera</h5>
        <h6 >৳ 28000</h6>
      </div>
    </div>
    <div className="carousel-item" data-bs-interval="2000">
      <img src={smartwatch} class="img-fluid mx-auto d-block" width={500} alt="..."/>
      <div className="carousel-caption d-none d-md-block">
        <h5 style={{fontSize:'24px' ,fontWeight:'700'}}>Samsung Galaxy Watch</h5>
        <h6 >৳ 25000</h6>
      </div>
    </div>
    <div className="carousel-item" data-bs-interval="2000">
      <img src={earphone} className="img-fluid mx-auto d-block" width={500} alt="..."/>
      <div className="carousel-caption d-none d-md-block">
        <h5 style={{fontSize:'24px' ,fontWeight:'700'}}>Apple Airpods Pro</h5>
        <h6 >৳ 27000</h6>
      </div>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
  )
}

export default Hero
