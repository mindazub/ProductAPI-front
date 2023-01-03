import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Image, Button } from 'react-bootstrap';

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [shoppingCart, setShoppingCart] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const response = await fetch('https://localhost:7180/api/Product');
      const data = await response.json();
      setProducts(data);
    };
    fetchProducts();
  }, []);

  const handleAddToCart = product => {
    const existingProduct = shoppingCart.find(p => p.id === product.id);
    if (existingProduct) {
      setShoppingCart(
        shoppingCart.map(p =>
          p.id === product.id ? { ...p, quantity: p.quantity + 1 } : p
        )
      );
    } else {
      setShoppingCart([...shoppingCart, { ...product, quantity: 1 }]);
    }
  };

  const handleRemoveFromCart = product => {
    const existingProduct = shoppingCart.find(p => p.id === product.id);
    if (existingProduct.quantity > 1) {
      setShoppingCart(
        shoppingCart.map(p =>
          p.id === product.id ? { ...p, quantity: p.quantity - 1 } : p
        )
      );
    } else {
      setShoppingCart(shoppingCart.filter(p => p.id !== product.id));
    }
  };

  return (
    <Container>
      <Row>
        <Col md={8}>
          <h2>Product List</h2>
          {products.map(product => (
            <div key={product.id}>
              <Image src="https://via.placeholder.com/150" alt={product.title} thumbnail />
              <h3>{product.title}</h3>
              <p>Price: ${product.price}</p>
              <Button onClick={() => handleAddToCart(product)}>Add to Cart</Button>
            </div>
          ))}
        </Col>
        <Col md={4}>
          <h2>Shopping Cart</h2>
          {shoppingCart.map(product => (
            <div key={product.id}>
              <Image src="https://via.placeholder.com/150" alt={product.title} />
                <h3>{product.title}</h3>
                <p>Quantity: {product.quantity}</p>
                <p>Price: ${product.price * product.quantity}</p>
                <Button onClick={() => handleRemoveFromCart(product)} className="btn btn-danger">
                  Remove
                </Button>
              </div>
            ))}
          </Col>
        </Row>
      </Container>
    );
  };
  
  export default ProductList;