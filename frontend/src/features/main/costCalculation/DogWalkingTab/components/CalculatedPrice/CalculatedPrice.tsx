import style from '../../../Page/CostCalculationPage.module.css';
import { useSelector } from 'react-redux';
import { selectPrice } from '../../selectors';

export default function CalculatedPrice(): JSX.Element {
  const price = useSelector(selectPrice);

  return (
    <div style={{
      marginTop: '2.3em',
      textAlign: 'left',
      fontSize: '1.5em',
      fontWeight: 500,
    }}>
      <span>Ваша цена:</span>
      <span style={{
        color: '#ff9a16',
        fontWeight: 700,
        fontSize: '1.4em',
        marginLeft: '1em',
      }}>
        от {price.totalPrice} руб
      </span>
      <a href='#form' type="submit"
        className={style.button}
      >
        узнать точную цену
      </a>
    </div>
  );
};
