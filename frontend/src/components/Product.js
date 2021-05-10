import React from "react";
import { Card } from "react-bootstrap";
import Rating from "./Rating";
import { Link } from "react-router-dom";

const Product = ({ product }) => {
  return (
    <div>
      <Link to={`/product/${product._id}`}>
        <Card className="my-3 p-3 rounded">
          <Card.Img src={product.image} varient="top" />
        </Card>
      </Link>

      <Card.Body>
        <Link to={`/product/${product._id}`}>
          <Card.Title as="div">
            <strong style={{ fontSize: 14 }}>{product.name}</strong>
          </Card.Title>
        </Link>

        <Card.Text as="div">
          <Rating value={product.rating} text={product.numReviews} />
        </Card.Text>

        <Card.Text as="h3">${product.price}</Card.Text>
      </Card.Body>
    </div>
  );
};

export default Product;
