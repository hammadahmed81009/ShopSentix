import React from 'react';
import card1 from '../Resources/1.jpg';
import card2 from '../Resources/2.jpg';
import card3 from '../Resources/3.jpg';
import card4 from '../Resources/4.jpg';
import card5 from '../Resources/5.jpg';

// Dummy data for card images and text
const cards = [
  { title: 'Emotion Insight', imageUrl: card1 },
  { title: 'Sentiment Explore', imageUrl: card2 },
  { title: 'Text Vibes', imageUrl: card3 },
  { title: 'Feeling Flow', imageUrl: card4 },
  { title: 'Word Moods', imageUrl: card5 },
  // ... add more cards as needed
];

const Card = ({ title, imageUrl }) => (
  <div
    className="group relative shadow-lg overflow-hidden rounded-lg m-4 transition duration-500 ease-in-out"
    style={{
      width: '405px',
      height: '220px',
      flexShrink: 0,
      borderRadius: '29px',
      backgroundColor: '#000', // Ensuring background doesn't show through
    }}
  >
    <img
      src={imageUrl}
      alt={title}
      className="w-full h-full object-cover group-hover:opacity-30" // Dimming more
    />
    <div className="absolute bottom-0 left-0 w-full p-2 opacity-0 group-hover:opacity-100 transition-opacity duration-700 ease-in-out transform group-hover:-translate-y-5">
      <span className="text-white text-2xl md:text-3xl font-bold block">
        {title}
      </span>
    </div>
  </div>
);

const Page = () => {
  return (
    <section id="section3">
      <div className="relative bg-gray-100 min-h-screen p-10 flex flex-col items-center justify-center mt-0">
        <h1 className="text-5xl font-bold text-black mb-8 z-10">
          Explore the ShopSentix
        </h1>
        <div
          className="h-1 bg-sky-500"
          style={{ width: '18rem', marginTop: '-1rem' }}
        ></div>
              <p className="text-lg mt-24 mb-0 z-10">
          Dive into the heart of words, where sentiments come to life.
        </p>

        {/* Background line */}
        <div
          className="absolute w-full bg-gray-600"
          style={{
            width: '1440px',
            height: '256px',
            background: '#404040',
            zIndex: 0,
            top: 'calc(50% + 1px)', // Adjust this value to move the line up or down
          }}
        ></div>

        {/* First row of cards */}
        <div Style="margin-top:100px">
          <div className="flex justify-center z-10">
            {cards.slice(0, 3).map((card, index) => (
              <Card key={index} title={card.title} imageUrl={card.imageUrl} />
            ))}
          </div>
        </div>

        {/* Second row of cards */}
        {cards.length > 3 && (
          <div className="flex justify-center z-10">
            {cards.slice(3, 5).map((card, index) => (
              <Card key={index} title={card.title} imageUrl={card.imageUrl} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default Page;
