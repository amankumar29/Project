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
            return <Card className='col-md-4'>
            <Card.Img variant="top" 
            src={ele.image} 
            style={{cursor:"pointer"}}
            onclick={handleShow}
            />
            <Card.Body>
              <Card.Title>{ele.name}</Card.Title>
              <Card.Subtitle className="mb-2 text-muted">Rs. {ele.price}</Card.Subtitle>
              {/* <Card.Text>
                This is a wider card with supporting text below as a natural lead-in to
                additional content. This content is a little bit longer.
              </Card.Text> */}
            </Card.Body>
            <Card.Footer>
            <Button variant="primary" >Add to Cart</Button>
            </Card.Footer>
          </Card>
        })}

        {/* modal */}
        <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>

         
        </>
    )
}

export default Product;
