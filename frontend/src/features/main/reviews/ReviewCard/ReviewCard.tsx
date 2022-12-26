import React from 'react';
import style from './ReviewCard.module.css';
import quotesIcon from '../img/quotes.svg';
import avatar from '../img/avatar1.png';
import Review from '../types/Review';

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
          <div className={style.rating}></div>
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
