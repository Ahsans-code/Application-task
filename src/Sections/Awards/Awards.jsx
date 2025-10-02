import React from 'react';

// Import award images from the assets folder
import award1 from '../../assets/award1.png';
import award2 from '../../assets/award2.png';
import award3 from '../../assets/award3.png';
import award4 from '../../assets/award4.png';

const Awards = () => {
    const awards = [
        {
            id: 1,
            image: award1,
            alt: "IT Firms Award",
            description: "Recognized as a top mobile app development company in 2018 by IT Firms."
        },
        {
            id: 2,
            image: award2,
            alt: "Top Mobile App Developers 2020 Award",
            description: "Top Developers mentioned us in their top app development companies in the USA list."
        },
        {
            id: 3,
            image: award3,
            alt: "Clutch Award",
            description: "Top React Native Developer recognition from Clutch in Alberta 2019."
        },
        {
            id: 4,
            image: award4,
            alt: "Appfutura Award",
            description: "Listed among the Top Mobile App Development Companies by Appfutura."
        }
    ];

    return (
        <section className="bg-white py-20 sm:py-24">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-bold text-gray-800">Awards and Recognitions</h2>
                </div>

                <div className="flex flex-wrap justify-center items-center gap-x-12 sm:gap-x-16 lg:gap-x-20 gap-y-12">
                    {awards.map((award) => (
                        <div
                            key={award.id}
                            className="group relative cursor-pointer flex justify-center items-center w-48 h-48 sm:w-52 sm:h-52"
                        >
                            <img
                                src={award.image}
                                alt={award.alt}
                                className="max-w-full max-h-full object-contain transition-transform duration-300 ease-in-out group-hover:scale-105"
                            />

                            <div
                                className="absolute inset-0 w-full h-full bg-black/70 rounded-full flex items-center justify-center p-6 text-center opacity-0 group-hover:opacity-100 transition-all duration-300 ease-in-out transform scale-90 group-hover:scale-100"
                            >
                                <p className="text-white text-sm font-light">
                                    {award.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Awards;