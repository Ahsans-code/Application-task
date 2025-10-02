import { useState } from 'react';

// Assuming images are in the assets folder and renamed for clarity
import productCrm from '../../assets/Laptop-2.png';
import productMarketplace from '../../assets/ipad-2.png';
import productOsda from '../../assets/Mobile-1.png';
import productTraining from '../../assets/Laptop-2.png';
import productHealth from '../../assets/ipad-2.png';
import productSports from '../../assets/Laptop.png'; // Assuming a name for the last laptop image

const Products = () => {
    const [activeTab, setActiveTab] = useState('ALL');

    const categories = [
        'ALL', 'Health Supreme', 'CRM 365', 'OSDA', 'Marketplace E-Commerce Platform', 'Sports Training App', 'Fitness'
    ];

    const productsData = [
        {
            id: 1,
            image: productCrm,
            title: 'CRM 365',
            description: 'A comprehensive CRM platform to manage customer relationships.',
            category: 'CRM 365',
        },
        {
            id: 2,
            image: productMarketplace,
            title: 'E-Commerce Platform',
            description: 'A robust marketplace solution for online vendors and customers.',
            category: 'Marketplace E-Commerce Platform',
        },
        {
            id: 3,
            image: productOsda,
            title: 'OSDA Mobile App',
            description: 'A sleek and intuitive mobile application for on-demand services.',
            category: 'OSDA',
        },
        {
            id: 4,
            image: productTraining,
            title: 'Fitness Training',
            description: 'An online platform for personalized fitness and training programs.',
            category: 'Fitness',
        },
        {
            id: 5,
            image: productHealth,
            title: 'Health Supreme',
            description: 'A mobile-first health and wellness tracking application.',
            category: 'Health Supreme',
        },
        {
            id: 6,
            image: productSports,
            title: 'Sports Training App',
            description: 'Advanced analytics and training schedules for aspiring athletes.',
            category: 'Sports Training App',
        },
    ];

    const filteredProducts = activeTab === 'ALL'
        ? productsData
        : productsData.filter(product => product.category === activeTab);

    return (
        <section className="bg-red-600 py-20 relative overflow-hidden">
            {/* Background pattern */}
            <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2240%22%20height%3D%2240%22%20viewBox%3D%220%200%2040%2040%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cg%20fill%3D%22%23ffffff%22%20fill-opacity%3D%220.05%22%20fill-rule%3D%22evenodd%22%3E%3Cpath%20d%3D%22M0%2040L40%200H20L0%2020M40%2040V20L20%2040%22%2F%3E%3C%2Fg%3E%3C%2Fsvg%3E')]"></div>

            <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="text-center mb-12">
                    <h2 className="text-5xl font-bold text-white">Products</h2>
                </div>

                <nav className="flex justify-center items-center flex-wrap gap-x-6 sm:gap-x-8 gap-y-4 mb-12">
                    {categories.map((category) => (
                        <button
                            key={category}
                            onClick={() => setActiveTab(category)}
                            className={`
                                text-base font-medium pb-2 transition-all duration-300
                                ${activeTab === category
                                    ? 'text-white border-b-2 border-white'
                                    : 'text-white/70 hover:text-white'
                                }
                            `}
                        >
                            {category === 'ALL' ? <strong>ALL</strong> : category}
                        </button>
                    ))}
                </nav>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-5">
                    {filteredProducts.map((product) => (
                        <div key={product.id} className="group relative w-96 bg-white p-6 rounded shadow-lg overflow-hidden cursor-pointer">
                            <div className="aspect-w-4 aspect-h-3">
                                <img
                                    src={product.image}
                                    alt={product.title}
                                    className="w-full h-full object-contain"
                                />
                            </div>

                            <div className="absolute inset-0 bg-black/75 flex flex-col justify-center items-center text-center p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out">
                                <h3 className="text-2xl font-bold text-white mb-2">{product.title}</h3>
                                <p className="text-white/90">{product.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Products;