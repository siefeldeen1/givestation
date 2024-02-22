import React from 'react'
import './news.css'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import News_item from '../../../compounts/news/news_item';
import { FaArrowRight } from "react-icons/fa6";

function News() {
    return (
        <div className='news'>
            <div className='news_body'>
                <div className='news_header'>
                    <h1 className='h1_news'>Recent News </h1>
                    <div className='news_more'>Read More <FaArrowRight style={{ marginBottom: "1px" }} /></div>
                </div>
                <Swiper
                    breakpoints={{
                        0: {
                            slidesPerView: 1,
                        },
                        400: {
                            slidesPerView: 2,
                        },
                        1200: {
                            slidesPerView: 3
                        },
                        1700: {
                            slidesPerView: 4
                        }
                    }}
                    spaceBetween={30}
                    slidesPerView={3}
                    // onSlideChange={() => console.log('slide change')}
                    onSwiper={(swiper) => console.log(swiper)}

                >
                    <SwiperSlide><News_item /></SwiperSlide>
                    <SwiperSlide><News_item /></SwiperSlide>
                    <SwiperSlide><News_item /></SwiperSlide>
                    <SwiperSlide><News_item /></SwiperSlide>
                    <SwiperSlide><News_item /></SwiperSlide>
                    <SwiperSlide><News_item /></SwiperSlide>
                    <SwiperSlide><News_item /></SwiperSlide>
                </Swiper>
            </div>
        </div>
    )
}

export default News