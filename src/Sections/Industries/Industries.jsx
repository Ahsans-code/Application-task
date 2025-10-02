import React from 'react';

import industry1 from '../../assets/pills.png';
import industry2 from '../../assets/running-shoes.png';
import industry3 from '../../assets/digital-economy.png';
import industry4 from '../../assets/healthcare.png';
import industry5 from '../../assets/briefcase.png';
import industry6 from '../../assets/cleaning.png';

const Industries = () => {
    const industryData = [
        {
            icon: industry1,
            title: "Medical & Pharma Services",
            description: "We research, plan, and execute - and these qualities make Appicoders stand out from the crowd. We put the needs of our clients ahead of us."
        },
        {
            icon: industry2,
            title: "Training & Fitness",
            description: "We research, plan, and execute - and these qualities make Appicoders stand out from the crowd. We put the needs of our clients ahead of us."
        },
        {
            icon: industry3,
            title: "Fintech",
            description: "We research, plan, and execute - and these qualities make Appicoders stand out from the crowd. We put the needs of our clients ahead of us."
        },
        {
            icon: industry4,
            title: "Health & Fitness",
            description: "We research, plan, and execute - and these qualities make Appicoders stand out from the crowd. We put the needs of our clients ahead of us."
        },
        {
            icon: industry5,
            title: "Business & Services",
            description: "We research, plan, and execute - and these qualities make Appicoders stand out from the crowd. We put the needs of our clients ahead of us."
        },
        {
            icon: industry6,
            title: "Cleaning Services",
            description: "We research, plan, and execute - and these qualities make Appicoders stand out from the crowd. We put the needs of our clients ahead of us."
        }
    ];

    return (
        <section className="bg-[#f0f2f5] py-20">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                    <h2 className="text-4xl font-bold text-gray-800">Industries</h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 rounded-md overflow-hidden shadow-lg">
                    {industryData.map((industry, index) => (
                        <div
                            key={index}
                            className={`
                                bg-white p-8
                                border-b-4 border-transparent rounded-md hover:border-b-4 hover:border-red-600 transition-all duration-200`}
                        >
                            <div className="flex items-start space-x-6">
                                <div className="flex-shrink-0">
                                    <img src={industry.icon} alt={`${industry.title} icon`} className="w-12 h-auto" />
                                </div>
                                <div>
                                    <h3 className="font-bold text-lg text-gray-900 mb-2">{industry.title}</h3>
                                    <p className="text-gray-600 text-sm leading-relaxed">{industry.description}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Industries;