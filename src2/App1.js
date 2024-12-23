import React from 'react';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import cartReducer from './redux/slices/cartSlice';
import ProductList from './components/ProductList';
import CartButton from './components/CartButton';
import CartPage from './components/CartPage';

const store = configureStore({
  reducer: {
    cart: cartReducer,
  },
});

const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <header style={headerStyles}>
          <h1 style={titleStyles}>Boutique de PC et Imprimantes</h1>
          <CartButton />
        </header>

        <main style={mainStyles}>
          <Routes>
            <Route path="/" element={<ProductList />} />
            <Route path="/cart" element={<CartPage />} />
          </Routes>
        </main>
      </Router>
    </Provider>
  );
};

const headerStyles = {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  padding: '10px 20px',
  backgroundColor: '#f8f9fa',
  boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
};

const titleStyles = {
  margin: 0,
  fontSize: '24px',
  color: '#333',
};

const mainStyles = {
  padding: '20px',
};

export default App;
