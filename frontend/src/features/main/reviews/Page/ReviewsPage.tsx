import React, { memo } from 'react';
import { useSelector } from 'react-redux';
import { selectReviews, selectLoadError, selectLoading } from '../selectors';
import Stack from '@mui/material/Stack';
import ReviewCard from '../ReviewCard/ReviewCard';
import loadingImg from './img/loading.gif';

import style from './ReviewsPage.module.css';
import avatar1 from '../img/avatar1.png';
import avatar2 from '../img/avatar2.png';
import avatar3 from '../img/avatar3.png';

export default function ReviewsPage(): JSX.Element {
  // const reviews = useSelector(selectReviews);
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
    }
  ]

  return (
    <div className={style.reviewsContainer}>
      <h3 className={style.title}>О нас говорят</h3>
      <Stack direction="row" spacing={4} sx={{justifyContent: 'center', paddingBottom: '10vh'}}>
        {loading ? (
          <img src={loadingImg} alt="loading..." />
        ) : loadError ? (
          <b>{loadError}</b>
        ) : (
          reviews.map((review) => (
            <ReviewCard key={review.id} review={review} />
          ))
        )}
      </Stack>
    </div>
  );
}
