import React from 'react';
import { FaSmile, FaFrown, FaMeh } from 'react-icons/fa';

const SentimentCard = ({ sentimentValue, sentimentType }) => {
  const bgColor = sentimentType === 'positive' ? 'bg-green-500' :
                  sentimentType === 'negative' ? 'bg-red-500' : 
                  'bg-gray-500';

  const Icon = sentimentType === 'positive' ? FaSmile :
               sentimentType === 'negative' ? FaFrown : 
               FaMeh;

  return (
    <div className={`flex justify-center items-center ${bgColor} text-white rounded-md w-60 h-40`}>
      <div className="text-center">
        <div className="flex items-center justify-center">
          <Icon className="text-3xl" />
        </div>
        <p className="text-lg font-bold">{sentimentValue}%</p>
        <p className="text-sm">Positive Reviews</p>
      </div>
    </div>
  );
};

export default SentimentCard;
