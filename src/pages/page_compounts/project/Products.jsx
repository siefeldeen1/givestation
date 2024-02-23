import React from 'react'
import './products.css'
import { FaArrowRight } from "react-icons/fa6";
import Product_item from '../../../compounts/product/Product_item';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

function Products() {

    return (
        <div className='products' id='project'>
            <h1 className='products_title'>Projects built with grants</h1>

            {window.innerWidth < 1000 ?
                <div className='swiper_proj'>
                    <Swiper
                        breakpoints={{
                            0: {
                                slidesPerView: 1,
                            },
                            400: {
                                slidesPerView: 1,
                            },

                        }}
                        spaceBetween={30}
                        slidesPerView={2}
                        // onSlideChange={() => console.log('slide change')}
                        onSwiper={(swiper) => console.log(swiper)}

                    >
                        <SwiperSlide><Product_item /></SwiperSlide>
                        <SwiperSlide> <Product_item /></SwiperSlide>
                        <SwiperSlide> <Product_item /></SwiperSlide>
                    </Swiper>
                </div> :
                <div className='products_item'>
                    <Product_item />
                    <Product_item />
                    <Product_item />
                </div>
            }


            <div className='View_more_projects'>View more projects <FaArrowRight /></div>
        </div>
    )
}

export default Products