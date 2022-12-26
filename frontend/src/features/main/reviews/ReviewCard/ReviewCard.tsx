import React from 'react';
import style from './ReviewCard.module.css';
import quotesIcon from '../img/quotes.svg';
import avatar from '../img/avatar1.png';

export default function ReviewCard(): JSX.Element {
  return (
    <div className={style.card}>
      <div className={style.head}>
        <div className={style.info}>
          <div className={style.title}>Евгения и Фрида</div>
          <div className={style.rating}></div>
          <div className={style.quotesIcon}>
            <img className={style.quotesIconSvg} src={quotesIcon} />
          </div>
        </div>
        <div className={style.avatar}>
            <img className={style.avatarImg} src={avatar} />
        </div>     
      </div>
      
      <div className={style.text}>
        Хотела бы выразить огромную благодарность Наталье Горбатюк. Оставляли впервые, и невероятно довольны! Каждый день получали ошеломляющие рассказы о проведённом дне, фото и видео где с собакой занимаются!
      </div>
    </div>
  )
};
