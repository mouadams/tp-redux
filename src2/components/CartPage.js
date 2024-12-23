import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeFromCart, decreaseQuantity, addToCart, clearCart } from '../redux/slices/cartSlice';
import { Link } from 'react-router-dom';

const CartPage = () => {
  const cartItems = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();

  const totalAmount = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);

  return (
    <div>
      <h2>Votre Panier</h2>
      {cartItems.length === 0 ? (
        <div>
          <p>Votre panier est vide.</p>
          <Link to="/" style={linkStyle}>
            Retourner à la boutique
          </Link>
        </div>
      ) : (
        <div>
          <ul style={listStyles}>
            {cartItems.map((item) => (
              <li key={item.id} style={itemStyles}>
                <img src={item.images} alt={item.designation} style={imageStyles} />
                <div style={infoStyles}>
                  <h3 style={titleStyles}>{item.designation}</h3>
                  <p>Prix : {item.price.toFixed(2)} DHS</p>
                  <div style={quantityContainerStyles}>
                    <button
                      onClick={() => {
                        if (item.quantity > 1) {
                          dispatch(decreaseQuantity(item.id));
                        } else {
                          dispatch(removeFromCart(item.id));
                        }
                      }}
                      style={buttonStyle}
                    >
                      -
                    </button>
                    <span style={quantityStyles}>{item.quantity}</span>
                    <button onClick={() => dispatch(addToCart(item))} style={buttonStyle}>
                      +
                    </button>
                  </div>
                </div>
              </li>
            ))}
          </ul>
          <h3>Total : {totalAmount.toFixed(2)} DHS</h3>
          <button onClick={() => dispatch(clearCart())} style={{ ...buttonStyle, backgroundColor: 'red', color: 'white' }}>
            Vider le panier
          </button>
        </div>
      )}
    </div>
  );
};

// Styles pour la mise en page du panier
const listStyles = {
  listStyleType: 'none',
  padding: 0,
};

const itemStyles = {
  display: 'flex',
  alignItems: 'center',
  marginBottom: '20px',
  borderBottom: '1px solid #ddd',
  paddingBottom: '10px',
};

const imageStyles = {
  width: '100px',
  height: '100px',
  objectFit: 'cover',
  borderRadius: '8px',
  marginRight: '20px',
};

const infoStyles = {
  flex: 1,
};

const titleStyles = {
  fontSize: '18px',
  margin: '0 0 10px',
};

const quantityContainerStyles = {
  display: 'flex',
  alignItems: 'center',
  marginTop: '10px',
};

const quantityStyles = {
  margin: '0 10px',
  fontSize: '18px',
  fontWeight: 'bold',
};

const buttonStyle = {
  padding: '5px 10px',
  borderRadius: '5px',
  border: '1px solid #ccc',
  cursor: 'pointer',
};

const linkStyle = {
  textDecoration: 'none',
  color: '#007bff',
  fontSize: '16px',
};

export default CartPage;
