import React, { useState } from 'react';

import redBg from '../../assets/red-bg.png';
import maskGroup from '../../assets/Mask-group.png';
import laptopIllustration from '../../assets/laptop-ilustration.png';
import slide1 from '../../assets/Group-122.png';
import slide2 from '../../assets/Group-123.png';
import slide3 from '../../assets/Group-124.png';
import service1 from "../../assets/service1.png";
import service2 from "../../assets/service2.png";
import service3 from "../../assets/service3.png";
import service4 from "../../assets/service4.png";
import service5 from "../../assets/service5.png";
import service6 from "../../assets/service6.png";
import { ArrowDown, ArrowUp } from 'lucide-react';
import TextSection from './TextSection';

const Services = () => {
    const [scroll, setScroll] = useState(0);

    const services = [
        { title: 'Custom Mobile Applications', description: 'iOS, Android and Mobile Apps', img: service1 },
        { title: 'Artificial Intelligence', description: 'Advanced AI & ML Solutions', img: service2 },
        { title: 'Custom Web Development', description: 'Robust Web, Progressive Web Apps', img: service3 },
        { title: 'Blockchain Development', description: 'Custom Blockchain Solutions', img: service4 },
        { title: 'Augmented Reality', description: 'Advanced AR Apps', img: service5 },
        { title: 'MVP Development', description: 'For Startups & Enterprises', img: service6 },
    ];
    const imageSlide = [
        slide1, slide2, slide3,
        slide1, slide2, slide3
    ];

    const handleScroll = (direction) => {
        const slideHeight = 300; // Adjust this value based on the height of your slides + gap
        if (direction === 'up') {
            setScroll((prev) => Math.min(prev + slideHeight + 100, 200));
        } else {
            const maxScroll = -(imageSlide.length - 2) * slideHeight - 200; // Adjust the number of visible slides
            setScroll((prev) => Math.max(prev - slideHeight, maxScroll));
        }
    };

    return (
        <div className="bg-white overflow-hidden">
            <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">
                <div className="grid md:grid-cols-2 gap-8 items-center">
                    <div className="text-center md:text-left">
                        <h2 className="text-3xl sm:text-4xl font-bold text-gray-800">
                            <span className="text-red-600">Appicoders</span> – #1. Mobile App & Web Development Company in USA
                        </h2>
                    </div>
                    <div>
                        <p className="text-gray-600 mb-6 text-center md:text-left">
                            Welcome to Appicoders, your trusted partner for expert mobile app and web development. With over 10+ years of experience, we specialize in creating, innovative, and cutting-edge solutions for all major mobile platforms, including Android, iOS, and Windows.
                        </p>
                        <div className="text-center md:text-left">
                            <button className="bg-red-600 text-white font-semibold px-8 py-3 rounded-md shadow-md hover:bg-red-700 transition-colors duration-300">
                                READ MORE
                            </button>
                        </div>
                    </div>
                </div>
            </section>

            <section className="relative z-10 py-16 md:py-96 text-white overflow-visible ">
                <div
                    className="absolute inset-0 bg-no-repeat bg-center w-full h-full"
                    style={{ backgroundImage: `url(${redBg})`, backgroundSize: 'cover' }}
                ></div>
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 ">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <div className='max-md:pt-28 max-md:pb-44'>
                            <h2 className="text-3xl md:text-4xl font-bold mb-2">Our Services</h2>
                            <p className="text-lg mb-10">Get to know about what we're good at.</p>
                            <div className="grid sm:grid-cols-2 gap-8">
                                {services.map((service, index) => (
                                    <div key={index} className="flex items-start space-x-4">
                                        <div className="w-12 h-12 flex justify-center items-center rounded-full bg-white">
                                            <img src={service.img} className="w-[55%]" alt={service.title} />
                                        </div>
                                        <div>
                                            <h3 className="font-bold text-lg">{service.title}</h3>
                                            <p className="text-sm opacity-80">{service.description}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
                <img src={laptopIllustration} alt="Laptop with code illustration" className="hidden lg:block absolute bottom-[251px] right-0 w-[600px]" />
            </section>

            <section className="z-0 relative bg-no-repeat bg-cover -mt-48 md:-mt-[400px]">
                <div
                    className="absolute z-0 inset-0 bg-no-repeat bg-center w-full h-full"
                    style={{ backgroundImage: `url(${maskGroup})`, backgroundSize: 'cover' }}
                ></div>
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 z-10 relative">
                    <div className="flex flex-col lg:flex-row gap-12 justify-between items-center">
                        <div className='pt-16 lg:pt-44'>
                            <TextSection />
                        </div>
                        <div className='flex items-center justify-center gap-5 md:gap-10'>
                            <div className="relative h-[90vh] md:h-[140vh] overflow-hidden">
                                <div
                                    className='flex flex-col items-center justify-between space-y-8'
                                    style={{
                                        transform: `translateY(${scroll}px)`,
                                        transition: 'transform 0.5s ease-in-out'
                                    }}>
                                    {imageSlide.map((image, i) => (
                                        <div key={i} className='backdrop-blur-md shadow-2xl p-5 bg-gray-200/10 rounded-lg'>
                                            <img src={image} alt={`Slide ${i + 1}`} className="z-0 w-64 sm:w-auto max-w-xs" />
                                        </div>
                                    ))}
                                </div>
                            </div>
                            <div className='flex flex-col justify-center items-center gap-3'>
                                <button onClick={() => handleScroll('up')} className='bg-white p-2 rounded-full cursor-pointer'>
                                    <ArrowUp color='black' size={20} />
                                </button>
                                <button onClick={() => handleScroll('down')} className='bg-white p-2 rounded-full cursor-pointer'>
                                    <ArrowDown color='black' size={20} />
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Services;