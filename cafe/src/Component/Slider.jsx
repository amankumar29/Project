import React from 'react'
import banner1 from "../Component/img/banner/banner 1.jpg";
import banner2 from "../Component/img/banner/banner 2.jpg";
import banner3 from "../Component/img/banner/banner 3.jpg";

const Slider = () => {
    return (
        <div id="carouselExampleInterval" className="carousel slide" data-ride="carousel">
  <div className="carousel-inner">
    <div className="carousel-item active" data-interval="10000">
      <img src={banner1} className="d-block w-100 " alt="..."/>
    </div>
    <div className="carousel-item" data-interval="2000">
      <img src={banner2} className="d-block w-100 " alt="..."/>
    </div>
    <div className="carousel-item">
      <img src={banner3} className="d-block w-100 " alt="..."/>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-target="#carouselExampleInterval" data-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="sr-only">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-target="#carouselExampleInterval" data-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="sr-only">Next</span>
  </button>
</div>
    )
}

export default Slider;
