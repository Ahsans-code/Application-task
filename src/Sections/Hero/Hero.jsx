import React, { useState } from 'react';
import mobileMockup from '../../assets/Mobile-Mockup1.png';
import heroBg from '../../assets/heroBg.png';
import logo from '../../assets/logo.png';
import { AnimatePresence, motion } from 'framer-motion';

const AppicoderoHeader = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const navLinks = ["Home", "About", "Services", "Why Choose Us", "Portfolio", "Products", "Testimonial", "Technologies", "Contact"];

    return (
        <header className="relative z-20 text-white">
            <div className="container relative mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between md:justify-end gap-3 h-24">
                    <img src={logo} className='w-40 md:w-[250px] md:h-[70px] md:absolute top-[55px] left-[50px]' />
                    <nav className="hidden lg:flex flex-col lg:items-end gap-3 pt-10">
                        <div className='flex gap-6  items-center'>

                            {navLinks.map((link) => (
                                <a key={link} href="#" className="text-lg hover:text-red-500  transition-colors duration-300">
                                    {link}
                                </a>
                            ))}
                        </div>
                        <div className="hidden lg:flex items-center space-x-4 rounded-full border-white border py-1 px-3">
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
                <div className={`lg:hidden bg-[#1e2029] h-screen ${isMenuOpen ? "translate-y-0" : "-translate-y-full"} overflow-hidden transition-all duration-200 ease-in-out fixed top-0 w-full pt-10 `}>
                    <div className="lg:hidden absolute right-5 top-5">
                        <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-white focus:outline-none">
                            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"} />
                            </svg>
                        </button>
                    </div>
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



const sliderContent = [
    {
        image: mobileMockup,
        heading: "Leading the Way in App Development Innovation",
        paragraph: "We build Android & iOS Mobile Apps that cater all your business needs and take it on the next level."
    },
    {
        image: mobileMockup,
        heading: "Crafting User-Centric Digital Experiences",
        paragraph: "Our expert team designs and develops beautiful, intuitive applications that your users will love."
    },
    {
        image: mobileMockup,
        heading: "Delivering Robust and Scalable Solutions",
        paragraph: "From startups to enterprise-level, we create powerful apps that grow with your business."
    }
];

const Hero = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const nextSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % sliderContent.length);
    };

    const prevSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + sliderContent.length) % sliderContent.length);
    };

    const currentSlide = sliderContent[currentIndex];

    return (
        <div className="relative overflow-hidden pb-10 ">
            <div
                className="absolute inset-0 w-full h-full bg-no-repeat bg-center"
                style={{ backgroundImage: `url(${heroBg})`, backgroundSize: 'cover' }}
            ></div>

            <div className="relative">
                <AppicoderoHeader />
                <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-7 md:pt-12 ">
                    <div className="flex flex-col md:flex-row gap-7 items-center">
                        <div className="flex justify-start">
                            {/* Animated Image */}
                            <AnimatePresence mode="wait">
                                <motion.img
                                    key={currentIndex}
                                    src={currentSlide.image}
                                    alt="Mobile App Mockup"
                                    className="w-64 md:w-full"
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    exit={{ opacity: 0 }}
                                    transition={{ duration: 0.5 }}
                                />
                            </AnimatePresence>
                        </div>
                        <div className="text-white lg:text-left">
                            {/* Animated Text Content */}
                            <AnimatePresence mode="wait">
                                <motion.div
                                    className='xl:w-[800px]'
                                    key={currentIndex}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: -20 }}
                                    transition={{ duration: 0.5 }}
                                >
                                    <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight">
                                        {currentSlide.heading}
                                    </h1>
                                    <p className="mt-6 text-lg text-white max-w-lg mx-auto lg:mx-0">
                                        {currentSlide.paragraph}
                                    </p>
                                </motion.div>
                            </AnimatePresence>

                            <div className="mt-10 flex flex-col sm:flex-row sm:items-center sm:justify-center lg:justify-start gap-4">
                                <a
                                    href="#"
                                    className="inline-block bg-gradient-to-br from-red-800 via-red-900 to-red-800 text-white font-semibold px-10 py-3 rounded-md shadow-lg transition-colors duration-300 text-center"
                                >
                                    GET A FREE QUOTE
                                </a>
                            </div>
                            <div className="flex self-baseline items-center justify-end pr-32 space-x-3 mt-4">
                                {/* Previous Button */}
                                <button onClick={prevSlide} className="bg-white p-3 rounded-full transition-colors duration-300">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="black">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
                                    </svg>
                                </button>
                                {/* Next Button */}
                                <button onClick={nextSlide} className="bg-white p-3 rounded-full transition-colors duration-300">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="black">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                                    </svg>
                                </button>
                            </div>
                        </div>
                    </div>
                </main>
            </div>
        </div>
    );
};

export default Hero;