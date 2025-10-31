import React from 'react';
import { FaFacebookF, FaTwitter, FaLinkedinIn } from 'react-icons/fa';
import footerLogo from '../../assets/Logo-Final.png'; // Assuming the logo is named this

const Footer = () => {
    const aboutLinks = ["HOME", "ABOUT US", "CONTACT US"];
    const servicesLinks = [
        "IPHONE APPLICATION DEVELOPMENT",
        "ANDROID APPLICATION DEVELOPMENT",
        "ENTERPRISE APP DEVELOPMENT"
    ];

    return (
        <footer className="bg-[#2d2f3b]">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-[#a9aeb8]">
                {/* Main footer content */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 py-16 max-lg:gap-y-4">

                    {/* Column 1: Logo & Contact */}
                    <div className="space-y-6">
                        <img src={footerLogo} alt="Appicoders Inc." className="h-10 mb-8" />
                        <h3 className="text-white font-bold text-2xl">Contact Us</h3>
                        <div className="text-sm space-y-2">
                            <p>Tel: +1 (800) 826-8018</p>
                            <p>Email: info@appicoders.com</p>
                        </div>
                        <div className="flex items-center space-x-3 pt-2">
                            <a href="#" className="w-9 h-9 bg-[#3b5998] rounded-full flex items-center justify-center text-white hover:opacity-80 transition-opacity">
                                <FaFacebookF />
                            </a>
                            <a href="#" className="w-9 h-9 bg-[#00acee] rounded-full flex items-center justify-center text-white hover:opacity-80 transition-opacity">
                                <FaTwitter />
                            </a>
                            <a href="#" className="w-9 h-9 bg-[#0e76a8] rounded-full flex items-center justify-center text-white hover:opacity-80 transition-opacity">
                                <FaLinkedinIn />
                            </a>
                        </div>
                    </div>

                    {/* Empty column for spacing on large screens */}
                    <div className="hidden lg:block"></div>

                    {/* Column 2: About */}
                    <div className="space-y-6">
                        <h3 className="text-white font-bold text-2xl">About</h3>
                        <ul className="space-y-3 text-sm">
                            {aboutLinks.map(link => (
                                <li key={link}>
                                    <a href="#" className="hover:text-white transition-colors">{link}</a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Column 3: Services */}
                    <div className="space-y-6">
                        <h3 className="text-white font-bold text-2xl">Appicoders Services</h3>
                        <ul className="space-y-3 text-sm">
                            {servicesLinks.map(service => (
                                <li key={service} className="flex items-start">
                                    <span className="text-white mr-2 mt-1 text-xs">&#9670;</span>
                                    <a href="#" className="hover:text-white transition-colors">{service}</a>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>

            {/* Bottom bar */}
            <div className="bg-[#22242d] py-5">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <p className="text-center text-xs text-[#a9aeb8]">
                        © 2025 APPICODERS. ALL RIGHTS RESERVED.
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;