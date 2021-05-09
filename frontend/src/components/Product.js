import React from "react";
import { Card } from "react-bootstrap";
import Rating from "./Rating";

const Product = ({ product }) => {
  return (
    <div>
      <Card className="my-3 p-3 rounded">
        <a href={`/products/${product._id}`}>
          <Card.Img src={product.image} varient="top" />
        </a>
      </Card>

      <Card.Body>
        <a href={`/product/${product.name}`}>
          <Card.Title>
            <strong>{product.name}</strong>
          </Card.Title>
        </a>

        <Card.Text as="div">
          <div>
            <p>
              <Rating
                value={product.rating}
                text={`${product.numReviews} reviews`}
              />
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
