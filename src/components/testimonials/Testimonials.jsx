import React from 'react'
import './testimonials.css'

// import Swiper core and required modules
import { Pagination } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';


import AVTR1 from '../../assets/avatar1.jpg'


const Testimonials = () => {

    const data = [
        {
            avatar: AVTR1,
            name: 'testimonial name 1',
            review: ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis, incidunt.Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis, incidunt.'
        },
        
    ]

    return (
        <section id="testimonials">
            <h5>Review from clients</h5>
            <h2>Testimonials</h2>

            <Swiper className="container testimonials__container"
                modules={[Pagination]}
                spaceBetween={40}
                slidesPerView={1}
                navigation
                pagination={{ clickable: true }}

            >
                {
                    data.map(({ avatar, name, review, index }) => {
                        return (
                            <SwiperSlide key={index} className="testimonials">
                                <div className="client__avatar">
                                    <img src={avatar} alt="" />
                                </div>
                                <h5 className="client__name">{name}</h5>
                                <small className="client__review">{review}</small>
                            </SwiperSlide>
                        )
                    })
                }
            </Swiper>
        </section>

    )
}

export default Testimonials