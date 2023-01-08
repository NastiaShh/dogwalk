import ReviewsSwiper from '../ReviewsSwiper/ReviewsSwiper';
import style from './ReviewsPage.module.css';


export default function ReviewsPage(): JSX.Element {
  return (
    <section className={style.reviewsSection} 
    >
      <h3 className={style.headerText}>
        О нас говорят
      </h3>        
      
      <ReviewsSwiper />
    </section>    
  );
};
