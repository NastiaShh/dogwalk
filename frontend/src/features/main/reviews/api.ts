import Review from './types/Review';

export async function loadReviews(): Promise<Review[]> {
  const response = await fetch('api/reviews');

  const result = await response.json();
  if (response.ok) {
    return result;
  } else {
    throw new Error(result.error);
  }
};
