import React from 'react'
import Carousel from "react-bootstrap/Carousel";
import "bootstrap/dist/css/bootstrap-grid.min.css";



const Slider = (props) => {
    // console.log(props)
    
    return ( 
        <>
        {/* <img src="./img/banner/banner1.jpg" alt="pizza" /> */}
        {/* <h6>{JSON.stringify(props.banner)}</h6> */}
        <Carousel fade>
            {props.banner.start.map((item,index)=>(
                <Carousel.Item key={index}>
                    <img
                     className="d-block w-100"
                     src={item}
                     alt='slider'
                     />
                     
              </Carousel.Item>
            ))}
       
        </Carousel>
        </>
    )
}

export default Slider;
