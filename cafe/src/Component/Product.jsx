import React, {useState} from 'react'
import {Modal, Card , Button} from "react-bootstrap";

const Product = (props) => {

  const [show, setShow] = useState(false);
  const [selectedData,setSelectedData] = useState("")
  

  const handleClose = () => setShow(false);
  const handleShow = (ele) =>{
    // console.log("data here",ele)
    setSelectedData(ele)
    return setShow(true)
  }
    return (
        <>
         {/* <h6>{JSON.stringify(props.product.pizza)}</h6> */}
         {/* <h3>Pizza</h3>  */}
            
        {props.product.pizza.map((ele,index) => {
            return ( <Card className='col-md-3 mb-3'key={index}>
            <Card.Img variant="top" 
            src={ele.image} 
            style={{cursor:"pointer"}}
            onClick={handleShow.bind(this,ele)}
            />
            <Card.Body>
              <Card.Title>{ele.name}</Card.Title>
              <Card.Subtitle className="mb-2 text-muted">Rs. {ele.price}</Card.Subtitle>
              {/* <Card.Text>
                {ele.Desc}
              </Card.Text> */}
            </Card.Body>
            <Card.Footer >
            <Button variant="primary"  >Add to Cart</Button>
            </Card.Footer>
          </Card>
          
         ) })}

        {/* modal */}
       
        <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{selectedData.name}</Modal.Title>
        </Modal.Header>
        <img src={selectedData.image} alt="" />
        <Modal.Body>{selectedData.Desc}</Modal.Body>
        <Button variant="primary" onClick={handleClose}>
            Add ToCart
          </Button>
        
      </Modal>
          {/* <h6>{JSON.stringify(selectedData)}</h6> */}
         
        </>
    )
}

export default Product;
