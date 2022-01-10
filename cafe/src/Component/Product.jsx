import React, {useState} from 'react'
import {Modal, Card , Button} from "react-bootstrap";

const Product = (props) => {

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
    return (
        <>
         {/* <h6>{JSON.stringify(props.product.pizza)}</h6> */}
         {/* <h3>Pizza</h3>  */}
            
        {props.product.pizza.map((ele) => {
            return ( <Card className='col-md-3 mb-3'>
            <Card.Img variant="top" 
            src={ele.image} 
            style={{cursor:"pointer"}}
            onClick={handleShow}
            />
            <Card.Body>
              <Card.Title>{ele.name}</Card.Title>
              <Card.Subtitle className="mb-2 text-muted">Rs. {ele.price}</Card.Subtitle>
              <Card.Text>
                {ele.Desc}
              </Card.Text>
            </Card.Body>
            <Card.Footer >
            <Button variant="primary"  >Add to Cart</Button>
            </Card.Footer>
          </Card>
          
         ) })}

        {/* modal */}
       
        <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>hello</Modal.Title>
        </Modal.Header>
        <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
        
      </Modal>

         
        </>
    )
}

export default Product;
