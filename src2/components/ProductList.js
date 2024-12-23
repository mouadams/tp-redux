import React from 'react';
import { useDispatch } from 'react-redux';
import { addToCart } from '../redux/slices/cartSlice';
const products = [
  { id: 1, designation: "Ordinateur Portable Lenovo IdeaPad 5 15ARE05 (81YQ00LXFE)", price: 8040.55, images: '/images/1.jpg' },
  { id: 2, designation: "Ordinateur Portable Lenovo ThinkBook 15 G3 ACL (21A4001WFE)", price: 6040.55, images: '/images/2.jpg' },
  { id: 3, designation: "Ordinateur Portable Lenovo ThinkPad E14 Gen 4 (21E3009PFE)", price: 11950.55, images: '/images/3.jpg' },
  { id: 4, designation: "Imprimante A3 Multifonction Jet d'encre HP OfficeJet Pro ", price: 4450.56, images: "/images/4.jpg" },
  { id: 5, designation: "Imprimante Multifonction Laser Monochrome HP LaserJet M141", price: 1970.45, images: "/images/5.jpg" },
  { id: 6, designation: "Epson EcoTank L3250 Imprimante multifonction à réservoirs", price: 1369.78, images: "/images/6.jpg" },
  { id: 7, designation: "Écran 23,8 Full HD Lenovo ThinkVision S24e-20 (62AEKAT2EU)", price: 1456.78, images: "/images/7.jpg" },
  { id: 8, designation: "Imprimante Multifonction Jet d'encre Canon PIXMA TS3440 ", price: 567.88, images: "/images/8.jpg" },
];


const ProductList = () => {
  const dispatch = useDispatch();

  const handleAddToCart = (product) => {
    dispatch(addToCart(product));
    
  };

  return (
    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px', justifyContent: 'center', padding: '20px' }}>
      {products.map((product) => (
        <div key={product.id} style={{
          border: '1px solid #ccc',
          borderRadius: '8px',
          boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
          width: '300px',
          padding: '20px',
          textAlign: 'center',
        }}>
          <img
            src={product.images}
            alt={product.designation}
            style={{ width: '100%', height: '200px', objectFit: 'cover', marginBottom: '10px' }}
          />
          <h3 style={{ fontSize: '1.2rem', marginBottom: '10px' }}>{product.designation}</h3>
          <p style={{ fontSize: '1rem', fontWeight: 'bold', color: '#333', marginBottom: '10px' }}>
            {product.price.toFixed(2)} DHS
          </p>
          <button
            onClick={() => handleAddToCart(product)}
            style={{
              padding: '10px 20px',
              backgroundColor: '#007bff',
              color: '#fff',
              border: 'none',
              borderRadius: '4px',
              cursor: 'pointer',
            }}
          >
            Ajouter au panier
          </button>
        </div>
      ))}
    </div>
  );
};

export default ProductList;
