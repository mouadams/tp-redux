import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const CartButton = () => {
  const cartItems = useSelector((state) => state.cart.items);

  const totalItems = cartItems.reduce((total, item) => total + item.quantity, 0);

  return (
    <Link to="/cart" style={cartButtonStyles}>
      🛒 Panier ({totalItems})
    </Link>
  );
};

const cartButtonStyles = {
  textDecoration: 'none',
  fontSize: '18px',
  color: '#007bff',
  backgroundColor: '#e9ecef',
  padding: '10px 20px',
  borderRadius: '5px',
  border: '1px solid #ccc',
  cursor: 'pointer',
};

export default CartButton;
