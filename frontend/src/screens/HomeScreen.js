import React from "react";
import Product from "../components/Product";
import { Row, Col } from "react-bootstrap";
import products from "../products";

const homeScreen = () => {
  return (
    <div>
      <h1>Latest Products</h1>
      <Row>
        {products.map((product) => (
          <Col>
            <Product
              key={product._id}
              product={product}
              sm={12}
              md={6}
              lg={4}
              xl={3}
            />
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default homeScreen;
