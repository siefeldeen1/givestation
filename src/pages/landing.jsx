import React from 'react'

import Header from './page_compounts/header/header.jsx'
import Feature from './page_compounts/feature/feature.jsx'
import Feature2 from './page_compounts/feature2/feature2.jsx'
import Projects from './page_compounts/project/Products.jsx'
import Multi from './page_compounts/multi/Multi.jsx'
import Product from './page_compounts/product/Product.jsx'
import Partner from './page_compounts/partners/partner.jsx'
import News from './page_compounts/news/News.jsx'
import Faq from './page_compounts/faq/Faq.jsx'
import Footer from './page_compounts/footer/Footer.jsx'

function landing() {
    return (
        <div>
            <Header />
            <Feature />
            <Feature2 />
            <Projects />
            <Multi />
            <Product />
            <Partner />
            <News />
            <Faq />
            <Footer />

        </div>
    )
}

export default landing