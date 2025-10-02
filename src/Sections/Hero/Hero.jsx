import React, { useState } from 'react';
import mobileMockup from '../../assets/Mobile-Mockup1.png';
import heroBg from '../../assets/heroBg.png';
import logo from '../../assets/logo.png';

const AppicoderoHeader = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const navLinks = ["HOME", "About", "Services", "Why Choose Us", "Portfolio", "Products", "Testimonial", "Technologies", "Contact"];

    return (
        <header className="relative z-20 text-white">
            <div className="container relative mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-end gap-3 h-24">
                    <img src={logo} className='w-[348px] h-[87px] absolute top-[55px] left-[104px]' />
                    <nav className="hidden lg:flex flex-col lg:items-end gap-3">
                        <div className='flex gap-3  items-center'>

                            {navLinks.map((link) => (
                                <a key={link} href="#" className="text-lg hover:text-red-500  transition-colors duration-300">
                                    {link}
                                </a>
                            ))}
                        </div>
                        <div className="hidden lg:flex items-center space-x-4 rounded-full border-white border py-1 px-2">
                            <a href="tel:+18008268018" className="flex items-center space-x-2 text-sm font-medium">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                                </svg>
                                <span>+1 (800) 826-8018</span>
                            </a>
                        </div>
                    </nav>

                    <div className="lg:hidden">
                        <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-white focus:outline-none">
                            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"} />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
            {isMenuOpen && (
                <div className="lg:hidden bg-[#1e2029] absolute w-full">
                    <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                        {navLinks.map((link) => (
                            <a key={link} href="#" className="block px-3 py-2 rounded-md text-base font-medium text-white hover:bg-gray-700">
                                {link}
                            </a>
                        ))}
                        <a href="tel:+18008268018" className="block px-3 py-2 rounded-md text-base font-medium text-white hover:bg-gray-700">
                            +1 (800) 826-8018
                        </a>
                    </div>
                </div>
            )}
        </header>
    );
};


const Hero = () => {
    return (
        <div className="relative overflow-hidden bg-[#0F111A]">
            <div
                className="absolute inset-0 w-full h-full bg-no-repeat bg-center"
                style={{ backgroundImage: `url(${heroBg})`, backgroundSize: 'cover' }}
            ></div>

            <div className="relative">
                <AppicoderoHeader />
                <main className="container mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-32">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <div className="flex justify-center lg:justify-start">
                            <img src={mobileMockup} alt="Mobile App Mockup" className="max-w-md w-full" />
                        </div>
                        <div className="text-white text-center lg:text-left">
                            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight">
                                Leading the Way in App Development Innovation
                            </h1>
                            <p className="mt-6 text-lg text-gray-300 max-w-lg mx-auto lg:mx-0">
                                We build Android & iOS Mobile Apps that cater all your business needs and take it on the next level.
                            </p>
                            <div className="mt-10 flex flex-col sm:flex-row sm:items-center sm:justify-center lg:justify-start gap-4">
                                <a
                                    href="#"
                                    className="inline-block bg-red-600 text-white font-semibold px-8 py-4 rounded-md shadow-lg hover:bg-red-700 transition-colors duration-300"
                                >
                                    GET A FREE QUOTE
                                </a>
                                <div className="flex items-center justify-center space-x-3 mt-4 sm:mt-0">
                                    <button className="bg-white/10 p-3 rounded-full hover:bg-white/20 transition-colors duration-300">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
                                        </svg>
                                    </button>
                                    <button className="bg-white/10 p-3 rounded-full hover:bg-white/20 transition-colors duration-300">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                                        </svg>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </main>
            </div>
        </div>
    );
};

export default Hero;