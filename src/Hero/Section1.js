import React from 'react';
import backgroundImage from '../Resources/Hero1.jpg'; // Replace with your image file

const HeroSection = () => {
    return (
        <div className="relative h-screen flex items-center justify-center">
            {/* Background Image */}
            <div className="absolute top-0 left-0 w-full h-full bg-cover bg-center" 
                 style={{ backgroundImage: `url(${backgroundImage})` }}>
            </div>

            {/* Dark Overlay with reduced opacity */}
            <div className="absolute top-0 left-0 w-full h-full bg-black opacity-70"></div>

            {/* Overlay Text */}
            <div className="relative z-10 text-center">
                <h1 className="text-4xl md:text-6xl font-bold text-white">
                    Decode Emotions, Uncover Insights
                </h1>
                <p className="text-2xl md:text-5xl mt-4 font-bold text-blue-500">
                    Your Sentiments, Analyzed
                </p>
            </div>
        </div>
    );
};

export default HeroSection;
