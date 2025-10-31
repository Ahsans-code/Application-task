import React from 'react';
import apple from "../../assets/appleDownload.png";
import google from "../../assets/googleDownload.png";

const TextSection = () => {
    return (
        <div
            className="relative bg-cover bg-center text-white p-4 md:p-10"
        >
            <div className="relative z-10 flex flex-col items-start max-w-lg">
                <div className="flex flex-wrap gap-2 mb-4">
                    <span className="bg-white/20 text-white text-xs font-semibold px-3 py-1 rounded-full">
                        iOS Development
                    </span>
                    <span className="bg-white/20 text-white text-xs font-semibold px-3 py-1 rounded-full">
                        Android Development
                    </span>
                    <span className="bg-white/20 text-white text-xs font-semibold px-3 py-1 rounded-full">
                        UI/UX Design
                    </span>
                </div>
                <h1 className="text-4xl md:text-5xl font-bold mb-4">
                    Caviar - Order Food Delivery
                </h1>
                <p className="text-base md:text-lg mb-8">
                    Get Food delivered from curated lists of local restaurants right at your fingertips with Caviar. Enjoy quality dining at home and make any night a special occasion.
                </p>
                <div className="flex flex-col sm:flex-row items-start sm:items-center space-y-4 sm:space-y-0 sm:space-x-4 mb-8">
                    <img src={apple} alt="Download on the App Store" className='w-36' />
                    <img src={google} alt="Get it on Google Play" className='w-36' />
                </div>
                <button className="bg-red-600 text-white font-bold py-4 px-8 rounded-lg text-sm md:text-base">
                    VIEW CASE STUDY
                </button>
            </div>
        </div>
    );
};

export default TextSection;