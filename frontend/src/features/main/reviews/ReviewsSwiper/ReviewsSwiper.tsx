import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// import required modules
import { Navigation } from "swiper";

import "./styles.css";

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
import avatar4 from '../img/avatar4.png';
import avatar5 from '../img/avatar5.png';
import avatar6 from '../img/avatar6.png';
import avatar7 from '../img/avatar7.png';

export default function SwiperPage(): JSX.Element {
  // const reviews = useSelector(selectReviews);
  const loadError = useSelector(selectLoadError);
  const loading = useSelector(selectLoading);

  const reviews = [
    {
      id: 1,
      name: 'Евгения и Фрида',
      photo: avatar1,
      rating: 5,
      text: 'Хотела бы выразить огромную благодарность Наталье Горбатюк. Оставляли впервые, и очень довольны! Каждый день получали ошеломляющие рассказы о проведённом дне, фото и видео где с собакой занимаются! 🥰',
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
      name: 'Анжелика и Сэм',
      photo: avatar3,
      rating: 4,
      text: 'Сэм перенес передержку нормально, волнения не было, так как постоянно от Виктории был фото и видео отчёт. Спасибо за заботу о нашем питомце) 🙌🏻',
    },
    {
      id: 4,
      name: 'Анастасия и Ник',
      photo: avatar6,
      rating: 4.5,
      text: 'Пользовалась впервые такой услугой и очень переживала, но оказалось зря, всё прошло отлично!! Очень довольна передержкой) Собака в хорошем настроении, спасибо большое Татьяне и ее семье за то, что приютили)',
    },
    {
      id: 5,
      name: 'Александр и Берри',
      photo: avatar5,
      rating: 5,
      text: 'Оказан великолепный прием и внимательность к питомцу и его хозяину - информация и фото о моментах жизни четвероногой гостьи емкие и своевременные:) Даже на шлейке и поводке был наведен художественный порядок, спасибо!:)',
    },
    {
      id: 6,
      name: 'Андрей и Маркус',
      photo: avatar4,
      rating: 5,
      text: 'Спасибо огромное! Так сложилось, что в нашем районе все Догситтеры были заняты. Благодарю за отклик, понимаю неудобство добираться и гулять в чужом районе. Все было здорово: и фото, и отчёт, выгул, на мытьё даже не претендовал!',
    },
    {
      id: 7,
      name: 'Дарья и Винцент',
      photo: avatar7,
      rating: 4,
      text: 'Собака после разлуки такая же веселая и активная, в процессе передержки каждый день были фото и видео 📸',
    }
  ]
  
  return (
    <div className="swiper-container">  

      <Swiper
        slidesPerView={1}
        spaceBetween={0}
        navigation={{
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        }}
        
        breakpoints={{
          0: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          960: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          1200: {
            slidesPerView: 3,
            spaceBetween: 20,
          },
          1390: {
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
