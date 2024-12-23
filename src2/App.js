

import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { incrementVote, resetVotes, addOption } from "./actions";


function App() {
  /*const [newOption, setNewOption] = useState("");*/
  const options = useSelector((state) => state.options);
  const dispatch = useDispatch();

  const handleVote = (id) => {
    dispatch(incrementVote(id));
  };

  const handleReset = () => {
    dispatch(resetVotes());
  };

  /*const handleAddOption = () => {
    if (newOption.trim()) {
      dispatch(addOption(newOption));
      setNewOption("");
    }
  };*/

  return (
    <div className="min-h-screen p-6 bg-gray-100 App">
      <h1 className="mb-6 text-3xl font-bold text-center text-blue-600">
      Vote for your favorite young player
      </h1>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {options.map((option) => (
          <div
            key={option.id}
            className="p-4 transition bg-white rounded-lg shadow-lg hover:shadow-xl"
          >
            <h2 className="mb-2 text-xl font-semibold text-gray-800">{option.title}</h2>
            <p className="mb-4 text-gray-600">
              Votes: <span className="text-blue-500">{option.votes}</span>
            </p>
            {option.image && (
             <img
             src={option.image}
             alt={option.title}
             className="object-cover w-full h-64 mb-4 rounded-lg sm:h-48 md:h-56 lg:h-72 xl:h-80"
           />
            )}
            <button
              onClick={() => handleVote(option.id)}
              className="w-full px-4 py-2 font-bold text-white transition bg-blue-500 rounded hover:bg-blue-600"
            >
              Vote
            </button>
          </div>
        ))}
      </div>
    
      

      <div className="mt-6 text-center">
        <button
          onClick={handleReset}
          className="px-6 py-2 font-bold text-white transition bg-red-500 rounded hover:bg-red-600"
        >
          Reset Votes
        </button>
      </div>
    </div>
  );
}

export default App;