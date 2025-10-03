import React from 'react';
import technologyImage from '../../assets/technology.png';
import cloudBg from '../../assets/cloud.png';

const Technologies = () => {
    return (
        <section
            className="relative bg-cover bg-center py-20 sm:py-24 overflow-x-hidden "
            style={{ backgroundImage: `url(${cloudBg})` }}
        >
            <div className="absolute inset-0 bg-black/70"></div>

            <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 ">
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-bold text-white tracking-wide">Technologies</h2>
                </div>

                <div className="max-w-5xl flex  items-center ">
                    <div className="bg-white pl-20 pr-32  py-40 min-w-2xl  shadow-2xl rounded  ">
                        <h3 className="text-3xl font-bold text-gray-800 mb-4">
                            Cloud Solutions
                        </h3>
                        <p className="text-gray-600 leading-relaxed text-base">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus nisl libero, sollicitudin vel tempor sed, ullamcorper quis diam. Ut eros elit, luctus eu pulvinar a, lacinia a justo. Sed felis sapien, rutrum ut tempus quis, elementum eu du.
                        </p>
                        <div className="flex items-center mt-6 space-x-2">
                            <div className="w-10 h-1 bg-red-500"></div>
                            <div className="w-4 h-1 bg-red-500"></div>
                        </div>
                    </div>


                    <img
                        src={technologyImage}
                        alt="Cloud Solutions"
                        className="h-[400px] -translate-x-28 z-10   object-cover rounded"
                    />

                </div>
            </div>
        </section>
    );
};

export default Technologies;