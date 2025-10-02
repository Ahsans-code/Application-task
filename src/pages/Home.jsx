import React from 'react'
import Hero from '../Sections/Hero/Hero'
import Services from '../Sections/Services/Services'
import WhyChooseUs from '../Sections/WhyChooseUs/WhyChooseUs'
import Testimonials from '../Sections/Testimonials/Testimonials'
import Industries from '../Sections/Industries/Industries'
import Technologies from '../Sections/Technologies/Technologies'
import Products from '../Sections/Products/Products'
import Awards from '../Sections/Awards/Awards'
import Footer from '../Sections/Footer/Footer'

export default function Home() {
    return (
        <div>
            <Hero />
            <Services />
            <WhyChooseUs />
            <Testimonials />
            <Industries />
            <Technologies />
            <Products />
            <Awards />
            <Footer />
        </div>
    )
}
