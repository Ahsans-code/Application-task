import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, A11y, EffectCoverflow } from 'swiper/modules';
import { FaRegHandshake, FaUsers, FaRegCreditCard } from 'react-icons/fa';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-coverflow';

const WhyChooseUs = () => {
    const features = [
        {
            icon: <FaRegHandshake size={40} className="text-gray-600" />,
            activeIcon: <FaRegHandshake size={40} className="text-white" />,
            title: "Focused Business Approach",
            description: "We research, plan, and execute - and these qualities make Appicoders stand out from the crowd. We put the needs of our clients ahead of us."
        },
        {
            icon: <FaUsers size={40} className="text-gray-600" />,
            activeIcon: <FaUsers size={40} className="text-white" />,
            title: "Professional Team",
            description: "Our mobile development company has extremely professional & expert mobile app developers who specialize in 2D, 3D, & isometric apps for Android, iOS, & webapp platforms."
        },
        {
            icon: <FaRegCreditCard size={40} className="text-gray-600" />,
            activeIcon: <FaRegCreditCard size={40} className="text-white" />,
            title: "Flexible Payment Terms",
            description: "Get your apps developed with most affordable price and with our flexible payment terms, you pay as your project progresses."
        },
        {
            icon: <FaRegHandshake size={40} className="text-gray-600" />,
            activeIcon: <FaRegHandshake size={40} className="text-white" />,
            title: "Focused Business Approach",
            description: "We research, plan, and execute - and these qualities make Appicoders stand out from the crowd. We put the needs of our clients ahead of us."
        },
        {
            icon: <FaUsers size={40} className="text-gray-600" />,
            activeIcon: <FaUsers size={40} className="text-white" />,
            title: "Professional Team",
            description: "Our mobile development company has extremely professional & expert mobile app developers who specialize in 2D, 3D, & isometric apps for Android, iOS, & webapp platforms."
        },
        {
            icon: <FaRegCreditCard size={40} className="text-gray-600" />,
            activeIcon: <FaRegCreditCard size={40} className="text-white" />,
            title: "Flexible Payment Terms",
            description: "Get your apps developed with most affordable price and with our flexible payment terms, you pay as your project progresses."
        }
    ];

    return (
        <section className="bg-[#f0f2f5] py-20 overflow-hidden">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-bold text-gray-800 mb-4">Why Choose Us?</h2>
                    <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                        With our unique approach and cost-effective solutions, your business will prosper because quality is the top priority for us.
                    </p>
                </div>

                <Swiper
                    modules={[Navigation, Pagination, A11y, EffectCoverflow]}
                    effect="coverflow"
                    grabCursor={true}
                    centeredSlides={true}
                    loop={true}
                    slidesPerView={'auto'}
                    coverflowEffect={{
                        rotate: 0,
                        stretch: -20,
                        depth: 100,
                        modifier: 1,
                        slideShadows: false,
                    }}
                    className="!py-4"
                >
                    {features.map((feature, index) => (
                        <SwiperSlide key={index} className="!w-[300px] sm:!w-[370px] sm:!h-[370px]">
                            {({ isActive }) => (
                                <div className={`p-8 w-full aspect-square bg-white rounded-full flex flex-col justify-center items-center text-center transition-all duration-300 ${isActive ? 'shadow-xl' : 'shadow-md'}`}>
                                    <div className={`rounded-full w-24 h-24 sm:w-28 sm:h-28 flex items-center justify-center mb-5 transition-colors duration-300 ${isActive ? 'bg-red-500' : 'bg-gray-200'}`}>
                                        {isActive ? feature.activeIcon : feature.icon}
                                    </div>
                                    <h3 className={`font-bold text-gray-800 text-lg sm:text-xl mb-2 transition-colors duration-300 ${isActive ? 'text-black' : 'text-gray-700'}`}>
                                        {feature.title}
                                    </h3>
                                    <p className="text-gray-500 text-xs sm:text-sm leading-relaxed ">
                                        {feature.description}
                                    </p>
                                </div>
                            )}
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </section>
    );
};

export default WhyChooseUs;