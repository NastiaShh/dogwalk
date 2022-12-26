import Review from './Review';

type ReviewState = {
  reviews: Review[];
  loadError?: string;
  loading?: boolean;
};

export default ReviewState;
