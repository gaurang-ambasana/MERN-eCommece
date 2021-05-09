import React from "react";
import { Card } from "react-bootstrap";
import Rating from "./Rating";
import { Link } from "react-router-dom";

const Product = ({ product }) => {
  return (
    <div>
      <Card className="my-3 p-3 rounded">
        <Link to={`/products/${product._id}`}>
          <Card.Img src={product.image} varient="top" />
        </Link>
      </Card>

      <Card.Body>
        <Link to={`/product/${product._id}`}>
          <Card.Title>
            <strong style={{ fontSize: 14 }}>{product.name}</strong>
          </Card.Title>
        </Link>

        <Card.Text as="div">
          <div>
            <p>
              <Rating value={product.rating} text={product.numReviews} />
            </p>
          </div>
        </Card.Text>

        <Card.Text>
          <h3>${product.price}</h3>
        </Card.Text>
      </Card.Body>
    </div>
  );
};

export default Product;
