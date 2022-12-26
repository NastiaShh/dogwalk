import React, { memo } from 'react';
import { useSelector } from 'react-redux';
import { selectReviews, selectLoadError, selectLoading } from '../selectors';
import Stack from '@mui/material/Stack';
import ReviewCard from '../ReviewCard/ReviewCard';
import loadingImg from './img/loading.gif';

import style from './ReviewCard.module.css';
import avatar from '../img/avatar1.png';
import quotesIcon from '../img/quotes.svg';

export default function ReviewsPage(): JSX.Element {
  const reviews = useSelector(selectReviews);
  const loadError = useSelector(selectLoadError);
  const loading = useSelector(selectLoading);

  return (
    <div>
      <h3>О нас говорят</h3>
      <Stack direction="row" spacing={2}>
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
