import React, { useState , useEffect } from 'react';
import WatchListCard from './watchListCard';

export default function Watchlist() {
  const [nestedCards, setNestedCards] = useState([]);
  const [inputValue, setInputValue] = useState('');
  const [hoveredIndex, setHoveredIndex] = useState(null);

  useEffect(() => {
    document.title = "WatchList"
  }, []);
  const handleAddButton = () => {
    if (inputValue.trim() !== '') {
      const updatedNestedCards = [...nestedCards];
      updatedNestedCards.push({ content: inputValue });
      setNestedCards(updatedNestedCards);
      setInputValue(''); // Clear the input field after adding the card
    }
  };

  const handleDeleteCard = (index) => {
    const updatedNestedCards = [...nestedCards];
    updatedNestedCards.splice(index, 1);
    setNestedCards(updatedNestedCards);
  };

  return (
    <div className="container mx-auto p-4 text-center">
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      {/* Input field and Add button */}
      <div className="mb-4 flex justify-center">
        <input
          type="text"
          placeholder="Add a word..."
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          className="p-3 w-1/4 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500 text-sm"
        />
        <button onClick={handleAddButton} className="ml-2 px-2 py-2 bg-blue-500 hover:bg-blue-600 text-white  rounded-md">
          Add
        </button>
      </div>

      {/* Display the nested cards */}
      <div className="flex flex-wrap justify-center mb-4">
        {nestedCards.map((nestedCard, index) => (
          <div
            key={index}
            className="relative bg-blue-100 p-5 m-1 rounded-md"
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            {/* Delete button to delete the card */}
            {hoveredIndex === index && (
              <button
                onClick={() => handleDeleteCard(index)}
                className="absolute top-0 right-0 m--9 px-2 py-1 bg-red-500 text-white rounded-full text-xs"
              >
                X
              </button>
            )}

            {/* Content of the nested card */}
            <p className="text-sm">{nestedCard.content}</p>
          </div>
        ))}
      </div>
      <div className="text-left mb-4">
      <p className="font-bold">Suggestions</p>
      <br></br>
      <br></br>
      <WatchListCard/>


      </div>
    </div>
  );
}