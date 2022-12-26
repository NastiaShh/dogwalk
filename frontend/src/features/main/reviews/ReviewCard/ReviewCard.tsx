import React from 'react';
import style from './ReviewCard.module.css';
import quotesIcon from '../img/quotes.svg';
import Review from '../types/Review';
import { Stack, Rating } from '@mui/material';
import PetsIcon from '@mui/icons-material/Pets';

type ReviewProps = {
  review: Review;
};

export default function ReviewCard({
  review,
}: ReviewProps): JSX.Element {
  return (
    <div className={style.card}>
      <div className={style.head}>
        <div className={style.info}>
          <div className={style.title}>{review.name}</div>
          <div className={style.rating}>
            <Stack spacing={2}>
              <Rating
                value={review.rating}
                precision={0.5}
                size='medium'
                icon={<PetsIcon fontSize='inherit' />}
                emptyIcon={<PetsIcon fontSize='inherit' />}
                name="read-only"
                readOnly
              />
            </Stack>
          </div>
          <div className={style.quotesIcon}>
            <img className={style.quotesIconSvg} src={quotesIcon} alt={'quotes-icon'} />
          </div>
        </div>
        <div className={style.avatar}>
            <img className={style.avatarImg} src={review.photo} alt={'profile'} />
        </div>     
      </div>
      
      <div className={style.text}>{review.text}</div>
    </div>
  )
};
