import style from '../../../Page/CostCalculationPage.module.css';


export default function CalculatedPrice(): JSX.Element {
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
        от 650 руб
      </span>
      <a href='#form' type="submit"
        className={style.button}
      >
        узнать точную цену
      </a>
    </div>
  );
};
