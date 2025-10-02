import React from 'react';
import { FaQuoteLeft } from 'react-icons/fa';

import testimonialBg from '../../assets/clientBg.png';
import clientAvatar from '../../assets/cleaning.png';

const Testimonials = () => {
    return (
        <section
            className="relative bg-cover bg-center py-20 sm:py-28"
            style={{ backgroundImage: `url(${testimonialBg})` }}
        >
            <div className="absolute inset-0 bg-black/50 backdrop-blur-xs"></div>

            <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="bg-[#E01923]/40  rounded-xl shadow-2xl p-8 md:p-12 relative">

                    <div className="absolute -top-8 left-8 sm:-top-10 sm:left-12 w-20 h-20 sm:w-24 sm:h-24 bg-white rounded-full flex items-center justify-center shadow-lg">
                        <FaQuoteLeft className="text-red-600 text-4xl" />
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
                        <div className="text-white pt-16 lg:pt-0">
                            <p className="uppercase tracking-widest font-semibold text-sm mb-3">
                                CLIENT TESTIMONIALS
                            </p>
                            <h2 className="text-4xl sm:text-5xl font-bold leading-tight">
                                What our clients are Saying.
                            </h2>
                        </div>

                        <div>
                            <div className="bg-white rounded-lg p-6 sm:p-8 shadow-lg relative">
                                <div className="flex items-center mb-6">
                                    <div className="relative mr-5 flex-shrink-0">
                                        <img
                                            src={clientAvatar}
                                            alt="Scarlett Lawrence"
                                            className="w-20 h-20 sm:w-24 sm:h-24 rounded-full object-cover ring-4 ring-white shadow-md"
                                        />
                                        <div className="absolute -bottom-1 -right-1 w-8 h-8 bg-red-600 rounded-full flex items-center justify-center text-white ring-4 ring-white">
                                            <FaQuoteLeft className="text-sm" />
                                        </div>
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-xl text-gray-800">Scarlett Lawrence</h3>
                                        <div className="w-12 h-1 bg-red-600 mt-1"></div>
                                    </div>
                                </div>

                                <p className="text-gray-600 text-base leading-relaxed">
                                    Thank you Team Appgine you guys have a great understanding of what's commit, and get things done very quickly compared to others. Reliable communication and qualitative suggestions on useful functionality during the planning stage made for a final product that surpassed initial expectations. Their project management is amazing. Tight deadlines were reliably met without issue. Our strong recommendations if you're looking for quality work.
                                </p>

                                <div className="w-16 h-1 bg-red-600 mt-6 ml-auto"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Testimonials;