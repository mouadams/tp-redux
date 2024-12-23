import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import "../index.css"
import 'bootstrap/dist/css/bootstrap.min.css';


import axios from 'axios';

export default function Home() {
  const [categories, setCategories] = useState([]);
  const [error, setError] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState("");

  const fetchCategories = async () => {
    try {
      const response = await axios.get("https://opentdb.com/api_category.php");
      setCategories(response.data.trivia_categories || []); 
    } catch (err) {
      setError("Échec lors de la récupération des catégories.");
    }
  };

  useEffect(() => {
    fetchCategories();
  }, []);

  const handleSelectChange = (event) => {
    setSelectedCategory(event.target.value);
  };

  return (
    <div className="container text-center mt-5">
    <h1 className="mb-4">Bienvenue au Quiz !</h1>
    
    {error && <p className="text-danger">{error}</p>}

    <div className="mb-3">
      <label htmlFor="category-select" className="form-label">Choose a category:</label>
      <select
        id="category-select"
        value={selectedCategory}
        onChange={handleSelectChange}
        className="form-select"
      >
        <option value="">--Please choose an option--</option>
        {categories.map((category) => (
          <option key={category.id} value={category.id}>
            {category.name}
          </option>
        ))}
      </select>
    </div>

    <button className="btn btn-primary mt-3" disabled={!selectedCategory}>
      <Link to={`/quiz`} state={{ category: selectedCategory }} className="text-white text-decoration-none">COMMENCER LE QUIZ</Link>
    </button>
  </div>
  );
}
