import React from 'react';

import redBg from '../../assets/red-bg.png';
import maskGroup from '../../assets/Mask-group.png';
import laptopIllustration from '../../assets/laptop-ilustration.png';
import caviarApp from '../../assets/Group-122.png';
import aldiApp from '../../assets/Group-123.png';
import fitnessApp from '../../assets/Group-124.png';
import caviarText from '../../assets/Group-129.png';
import service1 from "../../assets/service1.png";
import service2 from "../../assets/service2.png";
import service3 from "../../assets/service3.png";
import service4 from "../../assets/service4.png";
import service5 from "../../assets/service5.png";
import service6 from "../../assets/service6.png";

const Services = () => {
    const services = [
        { title: 'Custom Mobile Applications', description: 'iOS, Android and Mobile Apps', img: service1 },
        { title: 'Artificial Intelligence', description: 'Advanced AI & ML Solutions', img: service2 },
        { title: 'Custom Web Development', description: 'Robust Web, Progressive Web Apps', img: service3 },
        { title: 'Blockchain Development', description: 'Custom Blockchain Solutions', img: service4 },
        { title: 'Augmented Reality', description: 'Advanced AR Apps', img: service5 },
        { title: 'MVP Development', description: 'For Startups & Enterprises', img: service6 },
    ];

    return (
        <div className="bg-white">
            {/* Top Intro Section */}
            <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-12 md:py-20">
                <div className="grid md:grid-cols-2 gap-8 items-center text-center md:text-left">
                    <div>
                        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 leading-snug">
                            <span className="text-red-600">Appicoders</span> – #1. Mobile App & Web Development Company in USA
                        </h2>
                    </div>
                    <div>
                        <p className="text-gray-600 mb-6 text-sm sm:text-base leading-relaxed">
                            Welcome to Appicoders, your trusted partner for expert mobile app and web development. With over 10+ years of experience, we specialize in creating, innovative, and cutting-edge solutions for all major mobile platforms, including Android, iOS, and Windows.
                        </p>
                        <div>
                            <button className="bg-red-600 text-white font-semibold px-6 sm:px-8 py-3 rounded-md shadow-md hover:bg-red-700 transition-colors duration-300 text-sm sm:text-base">
                                READ MORE
                            </button>
                        </div>
                    </div>
                </div>
            </section>

            {/* Red Background Services Section */}
            <section className="relative z-10 py-16 md:py-96 text-white overflow-visible">
                <div
                    className="absolute inset-0 bg-no-repeat bg-center w-full h-full"
                    style={{ backgroundImage: `url(${redBg})`, backgroundSize: 'cover' }}
                ></div>

                <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        {/* Services List */}
                        <div>
                            <h2 className="text-3xl sm:text-4xl font-bold mb-2 text-center lg:text-left">
                                Our Services
                            </h2>
                            <p className="text-base sm:text-lg mb-10 text-center lg:text-left">
                                Get to know about what we're good at.
                            </p>
                            <div className="grid sm:grid-cols-2 gap-8">
                                {services.map((service, index) => (
                                    <div key={index} className="flex items-start space-x-4 text-left">
                                        <div className="w-12 h-12 flex justify-center items-center rounded-full bg-white shrink-0">
                                            <img src={service.img} className="w-[55%]" alt={service.title} />
                                        </div>
                                        <div>
                                            <h3 className="font-bold text-base sm:text-lg">{service.title}</h3>
                                            <p className="text-xs sm:text-sm opacity-80">{service.description}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

                {/* Laptop Image */}
                <img
                    src={laptopIllustration}
                    alt="Laptop with code illustration"
                    className="absolute bottom-[150px] sm:bottom-[220px] md:bottom-[251px] right-0 w-[300px] sm:w-[450px] md:w-[600px] max-w-full"
                />
            </section>

            {/* Mask Group with App Screens Section */}
            <section className="relative bg-no-repeat bg-cover -mt-[200px] sm:-mt-[300px] md:-mt-[400px] pb-20">
                <div
                    className="absolute inset-0 bg-no-repeat bg-center w-full h-full z-0"
                    style={{ backgroundImage: `url(${maskGroup})`, backgroundSize: 'cover' }}
                ></div>

                <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="flex flex-col md:flex-row gap-10 sm:gap-12 justify-between items-center">
                        {/* Text Section */}
                        <div className="text-white text-center md:text-left mt-24 sm:mt-40 md:mt-56">
                            <img
                                src={caviarText}
                                alt="Caviar - Order Food Delivery"
                                className="w-48 sm:w-64 md:w-auto mx-auto md:mx-0"
                            />
                        </div>

                        {/* App Images */}
                        <div className="relative flex flex-col items-center justify-between space-y-6 sm:space-y-8">
                            <img
                                src={aldiApp}
                                alt="Aldi App Screenshots"
                                className="z-0 max-w-[230px] sm:max-w-sm w-full"
                            />
                            <img
                                src={caviarApp}
                                alt="Caviar App Screenshots"
                                className="z-10 max-w-[230px] sm:max-w-sm w-full"
                            />
                            <img
                                src={fitnessApp}
                                alt="Fitness App Screenshots"
                                className="z-0 max-w-[230px] sm:max-w-sm w-full"
                            />
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Services;
