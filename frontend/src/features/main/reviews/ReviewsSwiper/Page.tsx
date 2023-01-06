import ReviewsSwiper from './ReviewsSwiper';


export default function Page(): JSX.Element {
  return (
    <div style={{
      background: '#f8efe8',
      paddingBottom: '10vh',
    }}>
      <div>
        <h3 style={{
          marginTop: 0,
        }}>
          О нас говорят
        </h3>
        
      </div>
      
      <ReviewsSwiper />
    </div>    
  );
};
