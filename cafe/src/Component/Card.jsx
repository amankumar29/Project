import React from 'react';
import data from "../Data/data.json";
import { Container, Row,} from "react-bootstrap";
import Product from "./Product";

const Card = () => {
    return(
        <>
        {/* <h6>{JSON.stringify(data.pizza)} </h6> */}
        <Container>
            <header><h1>Pizza</h1></header>

            <Row>
            <Product product={data} />
            
            </Row>
        </Container>
        </>
    )
}


export default Card;
