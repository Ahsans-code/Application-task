import React from 'react';
import { FaPhoneAlt } from 'react-icons/fa';
import contactImage from '../../assets/contact-image.png'; // Make sure to have this image in your assets

const ContactUs = () => {
    return (
        <section className="bg-white">
            <div className="">
                <div className="grid grid-cols-1 lg:grid-cols-2 ">
                    {/* Left Side: Form */}
                    <div className="bg-[#e50914] text-white p-8 sm:p-12 lg:p-16">
                        <div className="max-w-md mx-auto">
                            <p className="uppercase font-semibold tracking-wider text-sm mb-2">LET'S TALK</p>
                            <h2 className="text-4xl font-bold mb-4">Got an idea? Let's get in touch!</h2>
                            <p className="text-white/90 mb-8">
                                Have queries? Not sure of your App Strategy? Discuss with us and we'll guide you the way forward.
                            </p>

                            <form action="#" method="POST" className="space-y-5">
                                <div>
                                    <input
                                        type="text"
                                        name="name"
                                        id="name"
                                        placeholder="Your Name"
                                        className="w-full px-4 py-3 bg-white text-gray-800 rounded-md focus:outline-none focus:ring-2 focus:ring-white/50 transition"
                                    />
                                </div>
                                <div>
                                    <input
                                        type="email"
                                        name="email"
                                        id="email"
                                        placeholder="Email Address"
                                        className="w-full px-4 py-3 bg-white text-gray-800 rounded-md focus:outline-none focus:ring-2 focus:ring-white/50 transition"
                                    />
                                </div>
                                <div>
                                    <input
                                        type="tel"
                                        name="phone"
                                        id="phone"
                                        placeholder="Phone"
                                        className="w-full px-4 py-3 bg-white text-gray-800 rounded-md focus:outline-none focus:ring-2 focus:ring-white/50 transition"
                                    />
                                </div>
                                <div>
                                    <textarea
                                        name="message"
                                        id="message"
                                        rows="5"
                                        placeholder="Message"
                                        className="w-full px-4 py-3 bg-white text-gray-800 rounded-md resize-none focus:outline-none focus:ring-2 focus:ring-white/50 transition"
                                    ></textarea>
                                </div>
                                <div>
                                    <button
                                        type="submit"
                                        className="w-full bg-gradient-to-t from-black/60 to-black/40 text-white font-bold tracking-wider py-4 px-6 rounded-md shadow-lg hover:from-black/70 hover:to-black/50 transition-all duration-300"
                                    >
                                        LET'S GET IN TOUCH
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>

                    {/* Right Side: Image and Info */}
                    <div className="flex flex-col">
                        <div className="flex-grow">
                            <img src={contactImage} alt="Business meeting" className="w-full h-full object-cover" />
                        </div>
                        <div className="bg-[#2d2f3b] text-white text-center p-8 sm:p-10">
                            <p className="text-white/80 max-w-sm mx-auto mb-6">
                                Please submit your inquiry and our App Development Strategist will contact you shortly
                            </p>
                            <div className="mb-4">
                                <FaPhoneAlt className="text-3xl mx-auto" />
                            </div>
                            <p className="text-4xl font-bold tracking-wider mb-2">+1-(800) 826 8018</p>
                            <a href="mailto:info@appicoders.com" className="text-white/70 hover:text-white transition-colors">
                                info@appicoders.com
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ContactUs;