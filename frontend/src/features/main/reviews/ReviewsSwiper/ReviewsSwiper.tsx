import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// import required modules
import { Pagination, Navigation } from "swiper";

import "./styles.css";

import style from './ReviewsSwiper.module.css'

import { useSelector } from 'react-redux';
import { selectReviews, selectLoadError, selectLoading } from '../selectors';
import ReviewCard from '../ReviewCard/ReviewCard';
import loadingImg from '../Page/img/loading.gif';

import prevBtnEnabled from '../Page/img/prev-button-enabled.svg';
import nextBtnEnabled from '../Page/img/next-button-enabled.svg';

// import style from './ReviewsPage.module.css';
import avatar1 from '../img/avatar1.png';
import avatar2 from '../img/avatar2.png';
import avatar3 from '../img/avatar3.png';

export default function SwiperPage(): JSX.Element {
  const loadError = useSelector(selectLoadError);
  const loading = useSelector(selectLoading);

  const reviews = [
    {
      id: 1,
      name: 'Евгения и Фрида',
      photo: avatar1,
      rating: 5,
      text: 'Хотела бы выразить огромную благодарность Наталье Горбатюк. Оставляли впервые, и очень довольны! Каждый день получали ошеломляющие рассказы о проведённом дне, фото и видео где с собакой занимаются!',
    },
    {
      id: 2,
      name: 'Алексей и Лавруха',
      photo: avatar2,
      rating: 5,
      text: 'Юля, огромное вам спасибо!!! Точно буду обращаться ещё! Так трогательно было получать от вас видео приветы! Мы всей командой смотрели и умилялись! Лавруха счастлив и доволен! И я вместе с ним.',
    },
    {
      id: 3,
      name: 'Дарья и Винцент',
      photo: avatar3,
      rating: 5,
      text: 'Спасибо огромное! Так сложилось, что в нашем районе все Догситтеры были заняты. Благодарю за отклик, понимаю неудобство добираться и гулять в чужом районе. Все было здорово: и фото, и отчёт, выгул, на мытьё даже не претендовала 🥰',
    },
    {
      id: 4,
      name: 'Евгения и Фрида',
      photo: avatar1,
      rating: 5,
      text: 'Хотела бы выразить огромную благодарность Наталье Горбатюк. Оставляли впервые, и очень довольны! Каждый день получали ошеломляющие рассказы о проведённом дне, фото и видео где с собакой занимаются!',
    },
    {
      id: 5,
      name: 'Евгения и Фрида',
      photo: avatar1,
      rating: 5,
      text: 'Хотела бы выразить огромную благодарность Наталье Горбатюк. Оставляли впервые, и очень довольны! Каждый день получали ошеломляющие рассказы о проведённом дне, фото и видео где с собакой занимаются!',
    },
    {
      id: 6,
      name: 'Евгения и Фрида',
      photo: avatar1,
      rating: 5,
      text: 'Хотела бы выразить огромную благодарность Наталье Горбатюк. Оставляли впервые, и очень довольны! Каждый день получали ошеломляющие рассказы о проведённом дне, фото и видео где с собакой занимаются!',
    },
    {
      id: 5,
      name: 'Евгения и Фрида',
      photo: avatar1,
      rating: 5,
      text: 'Хотела бы выразить огромную благодарность Наталье Горбатюк. Оставляли впервые, и очень довольны! Каждый день получали ошеломляющие рассказы о проведённом дне, фото и видео где с собакой занимаются!',
    }
  ]
  
  return (
    <div style={{
      width: '80%',
      margin: 'auto'
    }}> 
        
      

      <Swiper
        slidesPerView={1}
        spaceBetween={10}
        navigation={{
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        }}
        // pagination={{
        //   clickable: true,
        // }}
        breakpoints={{
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 4,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 4,
            spaceBetween: 35,
          },
        }}
        modules={[Navigation]}
        className="mySwiper"
      >
        <img className='swiper-button-prev' src={prevBtnEnabled} alt='previous' />
        <img className='swiper-button-next' src={nextBtnEnabled} alt='next' />
        
        {loading ? (
          <img src={loadingImg} alt="loading..." />
        ) : loadError ? (
          <b>{loadError}</b>
        ) : (
          reviews.map((review) => (
            <SwiperSlide>
              <ReviewCard key={review.id} review={review} />
            </SwiperSlide>
          ))
        )}
      </Swiper>
    </div>
  );
}
